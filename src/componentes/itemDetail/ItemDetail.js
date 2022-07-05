import './ItemDetail.css'
import React from 'react'
import Contador from '../Contador/Contador'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ItemDetail = ({data}) => {
  let{id,name,price,description,img,stock,category}=data

  const {addItem, getProduct}=useContext(CartContext) 
  

  const[quantity,setQuantity]=useState(0)
  const value = useContext(CartContext)

    // console.log(value)


    const [seguirComprando, setSeguirComprando] = useState(false)


    

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito', quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Producto agregado con éxito',
          showConfirmButton: false,
          timer: 2000
        })
        setSeguirComprando(true)
    }
  
    
    

  return (
    <>
        <h1 style={{marginLeft:'15px'}}><small>{name}</small> </h1>
      <div className='box grid-responsive' style={{width:'80%'}}>
      
        <div className='detail-cointainer'>

              <div className='img-container'>
                <img style={{width:'250px', height:'250px', padding:'3px', marginLeft:'-2px'}} alt='asd' className='img' src={img}/>
              </div>

              
              <div className='description'>
                <ul>
                    <h5 style={{fontSize:'20px'}}> Producto: {name}</h5>
                    
                    <li>${price}.00</li>
                    
                    <li>stock: {stock}</li>
                </ul>

              </div>
              
              <div className='observaciones'>
              <h5 style={{fontSize:'20px'}}> Descripción del producto</h5>
              <article className='descripcion'>

                {description}
              </article>
              </div>

        </div>
         
          <section className='ItemFooter'>
            
              <div className='finalizar'>
                { quantity > 0  ? 
                <Link className=' button-finalizar' to='/cart'>Finalizar compra</Link> 
                 //el ? en la sig linea, es pq hay un momento en el que no tengo ningun valor.
                : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />}
              
              </div>
              <div className='seguirComprando'>
                  {seguirComprando !=false?<Link  to={'/'}>
                    <button className='btn btn-success btn-seguirComprando'>Seguir comprando</button></Link>:<></> }
              </div>

            </section>
    </div>  
    </>
  )
}

export default ItemDetail