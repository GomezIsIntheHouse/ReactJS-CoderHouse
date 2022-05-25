import React from 'react'


const Item = ({data,addToCart}) => {
    let{id,name,price,img,description} = data;
  return (
<>   

 <div style={{border:"thin solid gray", padding:"0.5rem", marginTop:"5px"} }>
        <h4 style={{fontSize:'18px'}}>{name}</h4>
        <img alt='asd' style={{height:"30%", width:"30%"}} src={img}></img>
        <h5 style={{fontSize:'14px'}}>${price}.00</h5>
        <div>
            <button className='btn' style={{fontSize:'12px', borderColor:'#000000'}} onClick={()=>addToCart(id)}>Agregar</button>
        </div>
    <div>
        <p>{description}</p>
    </div>
    </div>
    
    </>

  )
}

export default Item