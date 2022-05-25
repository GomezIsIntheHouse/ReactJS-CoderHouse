import React from 'react'


const Item = ({data,addToCart}) => {
    let{id,name,price,img} = data;
  return (

    <div style={{border:"thin solid gray", padding:"0.5rem", marginTop:"5px"}}>
        <h4>{name}</h4>
        <img alt='asd' style={{height:"30%", width:"30%"}} src={img}></img>
        <h5>${price}.00</h5>
        <div>

        <button className='btn btn-info'  onClick={()=>addToCart(id)}>Agregar</button>
        </div>
    </div>
  )
}

export default Item