//import { FaCartPlus } from "react-icons/fa";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch ,faAddressCard, faAirFreshener,faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'

// import imgCarrito from '../../../src/img/img-header/carrito.png'
// BsFillCartFill

const CartWidget=()=>{
    return(
        <>
    
        <div className='mt-2 p-0' style={{display:'flex'}}>
        
            <FontAwesomeIcon style={{color:'white', fontSize:'1.5em'}} icon={faCartShopping} />
        
      
          
        <h5 style={{color:'white'}}>5</h5>

        </div>
       
      
        </>
    )
}
export default CartWidget;