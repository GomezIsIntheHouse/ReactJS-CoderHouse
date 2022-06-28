import React from 'react'
import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemList = ({products, handlePage}) => {

 
  

    const addToCart=(id)=>{
        console.log(id)
    }
    
  

  return (
        <>
    <article className='box grid-responsive' style={{width:'80%', alignItems:'center',marginLeft:'40px'}}>
    
        {products.map(product=> 
        <Item
          key={product.id} 
          {...product}
          addToCart={addToCart}
          handlePage={handlePage}
           />)}
  
           
    </article>
    
    </>
  )
}

export default ItemList