
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
//Componentes
import CartContext from '../../Context/CartContext'
import { useContext,useState } from 'react'


const CartWidget=()=>{
// Usamos el use context ya que este estado NO se va a actualizar constantemente.
// Por eso mismo no lo paso por useState

//Ejemplo, el dato del usuario logueado se deberia guardar en un context.
    const {getQuantity} = useContext(CartContext)
    
    const quantity = getQuantity()
    
    console.log(quantity)
    
    return(
        <>
       
        <div className='mt-2 p-0' style={{display:'flex'}}>
        
            <FontAwesomeIcon style={{color:'white', fontSize:'1.5em'}} icon={faCartShopping} />

      
          {quantity>0? <h5 style={{color:'white',marginLeft:'8px'}}>{quantity}</h5>:<h5></h5>}
             

        </div>
        
       
      
        </>
    )
}
export default CartWidget;