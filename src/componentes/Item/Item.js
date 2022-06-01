import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({id,name,price,img,description}) => {
    // let{} = data;

  const addToCart=(id)=>{
    // const item = data.filter((item)=>item.id === id)
    console.log(id)
  }
    
  return (
<>   

 <div className='cardd' >
        <div>
        <h4 style={{fontSize:'18px'}}>{name}</h4>
        <div className=' img-container'>
          <img alt='asd' src={img}></img>

        </div>
        <h5 style={{fontSize:'14px'}}>${price}.00</h5>

        </div>

        <div className='btn-container'>


          <div>
              <button className='btn btn-agregar'
              style={{}} 
              onClick={()=>addToCart(id)}>Agregar</button>
          </div>

          <div className='Option-container'>
            <Link to={`/detail/${id}`} className='Option'>Ver Detalle</Link>
          </div>
          
        </div>
        <div>
    </div>   
        
    
    </div>
    
    </>

  )
}

export default Item