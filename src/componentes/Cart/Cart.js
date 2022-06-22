import React from 'react'
import { useContext,useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';

import './Cart.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'

import {addDoc, collection,doc, updateDoc,getDocs,query,where,documentId,writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase'

import CartContext from '../../Context/CartContext';
import Registro from '../Registro/Registro';

const MySwal = withReactContent(Swal)

const Cart = () => {
  const [buyer, setBuyer]= useState(
    {
      name: '',
      email:'',
      phone:'',
      edad:'',
      direccion:''
    }
  )

  
    let navigate = useNavigate();
    const [loading, setLoading]= useState(false)
    const {cart, removeItem,removeAll,getTotal}=useContext(CartContext);
    const [remove, setRemove]=useState('mostrar')
    const [button,setButton]=useState('mostrar')

    const alerta =(producto_id,producto_name)=>{
      Swal.fire({
        title: `Seguro desea eliminar a : ${producto_name}`,
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Si, eliminar'
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            removeItem(producto_id)
          Swal.fire('Item eliminado', '', 'info')

        } else if (result.isDenied) {
          Swal.fire('ok, no eliminaremos este item', '', 'info')
        }
      })
    }
    const edit = (producto_id)=>{
        console.log('prod id', producto_id)
      {<>
        <Link to={`/detail/${producto_id}`}></Link>
      </>}
        
    }
    
    
    //* Para generar la orden */
    const ids = cart.map(prod=>prod.id);
    //ahora voy a consultar el stock de los productos
    const batch = writeBatch(db)
    const OutOfStock=[]
    const collectionRef = collection(db,'products')

    const createOrder = ()=>{
      console.log('create order')
      setLoading(true)

      const objOrder = {
        buyer,
        items:{
          cart
        },
        total: getTotal()
      }

      console.log('Orden:', objOrder)

      const collectionRef = collection(db, 'orders')

      addDoc(collectionRef, objOrder).then(({id})=>{
        console.log(id)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Orden creada extitósamente`,
          text: id,
          showConfirmButton: false,
          timer:2000
          
        })
        
      })
      
    }
    if(cart!=0){
      
    // pregunto si el campo esta en el array de ids

    getDocs(query(collectionRef,where(documentId(),'in', ids)))
    .then(resp=>{
        resp.docs.forEach(doc=>{

          const dataDoc=doc.data()

          const prodQuantity = cart.find(prod=>prod.id=== doc.id)?.quantity

          if(dataDoc.stock >= prodQuantity){
            //aca entra el batch update. Lugar que guardo las operaciones para ejecutarlas todas juntas
            //dentro del batch guardo lo que voy a actualizar y a quien voy a actualiazar
            batch.update(doc.ref, {stock:dataDoc.stock - prodQuantity}) 

          }else{
            //voy guardando los productos sin stock en el array
            OutOfStock.push({id:doc.id,...dataDoc})
          }

        }).then(()=>{
          if(OutOfStock.length=== 0){
            const collectionRef = collection(db,'orders')
           return addDoc(collectionRef, this.objOrder)
          }else{
              return Promise.reject({type:'out_of_stock', products:OutOfStock})
          }
        }).then(({id})=>{
          batch.commit()
          console.log('el id de la orden es', id)
        })
      }).catch(e=>{
        if(e.type === 'out_of_stock'){
          console.log('no hay stock')
        }
      }).finally(()=>{setLoading(false)})

   
    }

     

    if(loading){
      return(
        setTimeout(() => {
          Swal.fire({
            title: 'Estamos generando tu orden!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        })
      
      )
    }
    const goCart=()=>{
      // navigate('/cart-detail')
    }

  return (
      <>
      <div className=''>

             <div className='cart-legend'>
                <h5 className='legend' >Carrito de Compra</h5>
            </div>
          {
             remove === 'mostrar'?
                  <>
                  <div className='cart-container col-12'>

                 
                    <table className='mt-3 table table-bordered table-hover' >
                    <thead className='thead-dark'>
                      
                      <th className='head-table'>Producto</th>
                      <th className='head-table'>Cantidad</th>
                      <th className='head-table'>Costo</th>
                      <th className='head-table'>Subtotal</th>
                      <th className='head-table'>Herramienta</th>
                    </thead>
                    <tbody>
                      {cart.map(prod=>{
                        return(

                        <tr key={prod.id}>
                       
                          <td className='body-table'>{prod.name}</td>
                          <td className='body-table'>{prod.quantity}</td>
                          <td className='body-table'>${prod.price}.00</td>
                          <td className='body-table' id='total'>${prod.price * prod.quantity}.00</td>
                          <td className='body-table tool-container'>
                              <div className="flex-container">
                                <div className='d-flex'>
                                  
                                <button type='button'
                                  className='btn btn-remove-item' 
                                  onClick={()=>alerta(prod.id,prod.name)}>
                                    <FontAwesomeIcon icon={faTrashCan} /></button>
                                    <Link to={`/detail/${prod.id}`}>
                                    
                                    <button type='button'
                                  className='btn btn-edit-item' 
                                  onClick={()=>edit(prod.id)}>
                                    <FontAwesomeIcon icon={faPen} /></button>
                                    </Link>
                                </div>
                              
                              </div>
                        </td>
                        
                        </tr>
                        )

                      })

                      }
                      <tr  className='total-head' style={{background:'#D2ACEC '}} >
                        <td style={{fontSize:'.6em',borderColor:'#D2ACEC '}}>Total Carrito</td>
                        <td style={{borderColor:'#D2ACEC '}}></td>
                        <td className='nro-total' style={{borderColor:'#D2ACEC ',fontSize:'0.6rem'}}><b>${getTotal()}.00</b></td>
                        <td style={{borderColor:'#D2ACEC '}}></td>

                        <td style={{borderColor:'#D2ACEC '}}>
                          <div className='comprar-carrito-cart'>
                    
                                
                                {
                                button === 'mostrar'? <button className='btn  btn-comprarCarrito' 
                                onClick={createOrder}>Generar Orden</button>:<></>
                                }
                                
                          </div>
                          </td>
                      </tr>
                      
                    </tbody>
                  </table>
                  </div>
                  
                  
                  </>
                  :
                  <></>
          }
          {
            <>
              <Link to={'/registro'}>
            <div className='cargar-datos'>
                <button className='btn btn-danger' onClick={()=>{

                      <Registro buyer={buyer} setBuyer={setBuyer}/>
                }}>
                    CARGAR DATOS PERSONALES
                </button>
              
            </div>
              </Link>
            <div className='btn-contenedor'>

            <Link to={'/'}  style={{textDecoration:'none'}}>
              <div className='col-12 mb-3 mt-3 '>
                  <div className=''>
                      <div className=''>

                            <button className='btn  btn-seguir-comprando'>
                                Seguir comprando 
                            </button>
                      </div>

                  </div>
              </div> 
            </Link>
                              {  
       remove === 'mostrar'?
       
       <button  className='btn btn-remove btn-all' onClick={() => {Swal.fire({
        
        title: `¿Seguro desea eliminar todos los productos? `,
        showDenyButton: true,
      
        confirmButtonText: 'Si, eliminar'
        
      }).then((result) => {
        
        if (result.isConfirmed) {
            removeAll()
            setRemove('no-mostrar')
            setButton('no-mostrar')
          
          Swal.fire('Carrito eliminado', '', 'info')

        } else if (result.isDenied) {
          Swal.fire('ok, no eliminaremos el carrito', '', 'info')
          
        }
      })}}>Remove All</button>
      
      :<></>

      }
            </div>
            </>
          }  
      
    </div>

    

    </>
  )
}

export default Cart