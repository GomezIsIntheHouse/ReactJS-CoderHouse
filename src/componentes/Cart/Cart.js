import React from 'react'
import { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import './Cart.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Cart = () => {
    const {cart, removeItem,removeAll}=useContext(CartContext);
    
    
  return (
      <>
    <div className='cart-legend'>
        <h5 className='legend' >Carrito de Compra</h5>
        </div>
    <div >
        {cart.map(prod=>{
            
            return(
                <>
                
                    

                <div className='content  grid-responsive '>

                 <div className='cart'>

                    
                    <div className='item name' key={prod.id}>
                        {prod.name}
                    </div>
                    <div className='item'>Cantidad: {prod.quantity}</div>
                    <div className='item'>Precio x unidad:${prod.price}.00</div>
                    <div className='item subtotal'>
                        <h5>subtotal: ${prod.price * prod.quantity }.00</h5>
                        
                        </div>
                    <button className='btn btn-remove' onClick={() => 
                        Swal.fire({
                        title: `Seguro desea eliminar a : ${prod.name}`,
                        showDenyButton: true,
                        // showCancelButton: true,
                        confirmButtonText: 'Si, eliminar'
                        
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            removeItem(prod.id)
                          Swal.fire('Item eliminado', '', 'info')

                        } else if (result.isDenied) {
                          Swal.fire('ok, no eliminaremos este item', '', 'info')
                        }
                      })
                        }>Remove item</button>
                    

                    

                </div>

                </div>
                
                
                </>
            )
        })}
    </div>
    <div>
        <Link to={'/'}>
        
                <button className='btn btn-remove btn-all' onClick={() => Swal.fire({
                        title: `Seguro desea `,
                        showDenyButton: true,
                        // showCancelButton: true,
                        confirmButtonText: 'Si, eliminar'
                        
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            removeAll()
                          Swal.fire('Carrito eliminado', '', 'info')

                        } else if (result.isDenied) {
                          Swal.fire('ok, no eliminaremos el carrito', '', 'info')
                          
                        }
                      })
                        }>Remove All</button>
        </Link>

    </div>

    </>
  )
}

export default Cart