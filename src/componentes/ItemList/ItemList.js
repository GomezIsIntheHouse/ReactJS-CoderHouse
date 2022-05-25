import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

    const addToCart=(id)=>{
        console.log(id)
    }

  return (
        <>
    <article className='box grid-responsive'>
    
        {products.map(product=> <Item key={product.id} 
        data={product} addToCart={addToCart}/>)}
    
           
    </article>
    
    </>
  )
}

export default ItemList