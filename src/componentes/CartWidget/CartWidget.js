
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'
//Componentes


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