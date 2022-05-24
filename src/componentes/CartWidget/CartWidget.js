
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'
//Componentes
import{Contador} from '../Contador/Contador'


const CartWidget=(data)=>{
    let{quantity}=data;
    
    return(
        <>
    
        <div className='mt-2 p-0' style={{display:'flex'}}>
        
            <FontAwesomeIcon style={{color:'white', fontSize:'1.5em'}} icon={faCartShopping} />
        
      
          
        <h5 style={{color:'white'}}>{quantity}</h5>

        </div>
       
      
        </>
    )
}
export default CartWidget;