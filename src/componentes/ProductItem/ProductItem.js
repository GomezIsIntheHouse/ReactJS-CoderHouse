import React from 'react'

const ProductItem = ({data,addToCart,verDetalle}) => {
    let{id,name,price}=data;

  return (
    <div style={{border:"thin solid gray", padding:"1rem"}}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button className='btn btn-info' onClick={()=>addToCart(id)}>Agregar</button>
      

    </div>


  )
}

export default ProductItem