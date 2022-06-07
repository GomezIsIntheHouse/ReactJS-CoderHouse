import React from 'react'
import { useContext,useState } from 'react'
import CartContext from '../../Context/CartContext';
import './Cart.css'
const Cart = () => {
    const {cart,removeItem}=useContext(CartContext);
    
    
  return (
      <>
    <div className='cart-legend'>
        <h5>Carrito de Compra</h5>
        </div>
    <div >
        {cart.map(prod=>{
            
            return(
                <>
                
                    

                <div className='content  grid-responsive'>

                 <div className='cart'>

                    
                    <div className='item' key={prod.id}>
                        {prod.name}
                    </div>
                    <div className='item'>Cantidad:{prod.quantity}</div>
                    <div className='item'>Precion x unidad:{prod.price}</div>
                    <div className='item subtotal'>
                        <h5>subtotal: {prod.price}*{ prod.quantity} </h5>
                        
                        </div>
                    <button className='btn btn-remove' onClick={() => removeItem(prod.id)}>Remove all</button>
                    <div>
                        <img  src={prod.img}/>
                    </div>

                </div>

                </div>
                
                </>
            )
        })}
    </div>
    </>
  )
}

export default Cart