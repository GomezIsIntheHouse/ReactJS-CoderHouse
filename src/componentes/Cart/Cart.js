import React from 'react'
import { useContext, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';

import './Cart.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../Context/AuthContext'
import {addDoc, collection,doc, updateDoc,getDocs,query,where,documentId,writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase'

import CartContext from '../../Context/CartContext';
import Registro from '../Registro/Registro';

const MySwal = withReactContent(Swal)

const Cart = () => {
  const {user,loadingAuth,logout} =  useAuth()
    // const AuthContext=useAuth() //importando el contexto de manera mas pro
  
    let navigate = useNavigate();
    const [loading, setLoading]= useState(false)
    const {cart, removeItem,removeAll,getTotal,quantity}=useContext(CartContext);
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

    const createOrder = () => {
        console.log('crear orden')
        setLoading(true)
      const usuario = {email:localStorage.getItem('email'),nombre:localStorage.getItem('nombre'),direccion:localStorage.getItem('direccion')}
        const objOrder = {
            usuario,
            items: cart,
            total: getTotal()
        }
        console.log('orden', objOrder)
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Orden creada extitósamente`,
                    text: id,
                    showConfirmButton: false,
                    timer:1000
                    
                  })

            }).catch(error => {
                console.log(error)
                   Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Algunos items no tienen stock',
                   
                    showConfirmButton: false,
                    timer:2000
                    
                  })
            }).finally(() => {
                setLoading(false)
            })
    }

    // if(loadingAuth){
    //   return <h1>Loading...</h1>
    // }

    const handleLogout = async()=>{

        await logout()
       
    }
  
  return (
      <>
      <div className=''>

             <div className='cart-legend'>
                <h5 className='legend' >Carrito de Compra de {user?.email}</h5> 
            </div>
           
              <div className='d-flex ms-3'>

                          {
                            user?
                            <div className=''><button className='btn btn-danger' onClick={()=>{
                              Swal.fire({
                      
                                title: `¿Seguro desea salir? `,
                                showDenyButton: true,
                                confirmButtonText: 'Aceptar'
                                
                              }).then((result)=>{
                                if(result.isConfirmed){
                                  removeAll()
                                  Swal.fire('Muchas gracias por su visita', '', 'info')
                                  setTimeout(() => {
                                    handleLogout()
                                  }, 500);
                                }

                              })
                              
                            }}>Logout</button></div>:

                            <></>
                          }
                           {button ==='mostrar'?
            
            
                        
                        <div className='cargar-datos ms-3'>

                            <button className='btn btn-info' onClick={()=>{ 
                              // if(user){
                              //   var name = localStorage.getItem('nombre')
                              //   var direcc = localStorage.getItem('direccion')
                              //   var email = localStorage.getItem('direccion')
                              //   console.log(name, direcc,email)
                              // }
                              Swal.fire({
                      
                                title: `Carrito de ${user.email} `,
                                text:`Enviaremos a ${localStorage.getItem('nombre')}, con dirección en:${localStorage.getItem('direccion')}`,
                                showDenyButton: true,
                                confirmButtonText: 'Crear orden de Compra'
                                
                              }).then((result)=>{
                                if(result.isConfirmed){
                                  createOrder()
                                  setTimeout(() => {
                                    navigate('/')
                                    removeAll()
                                  }, 1500);
                                }
                                if(result.isDenied){
                                  
                                  
                                  return;
                                }

                              })
                            }}>
                                Comprar Carrito
                            </button>
                          
                        </div>
                          :<></>
                          
                          }
              </div>
          {
             remove === 'mostrar'?
                  <>
                  <div className='cart-container col-12'>

                 
                    <table className='mt-3 table table-bordered table-hover' >
                    <thead className='thead-dark'>
                      <tr>


                        <th className='head-table'>Producto</th>
                        <th className='head-table'>Cantidad</th>
                        <th className='head-table'>Costo</th>
                        <th className='head-table'>Subtotal</th>
                        <th className='head-table'>Tools</th>
                      </tr>
                      
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
            {/* {
              user?
              <div>
                
              </div>:<div></div>
            } */}
            
           
              {/* <Link to={'/registro'}>
            <div className='cargar-datos'>

                <button className='btn btn-danger' onClick={()=>{ <Registro/>}}>
                    CARGAR DATOS PERSONALES
                </button>
              
            </div>
              </Link> */}
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