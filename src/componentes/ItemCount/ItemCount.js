
import { useState } from 'react'
import './ItemCount.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ItemCount = ({stock = 0, initial =1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const incremento =() => {
       if(quantity < stock) {
           setQuantity(quantity + 1)
       }
   }

   const decremento = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className='Button' onClick={decremento}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className='Button' onClick={incremento}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}

export default ItemCount