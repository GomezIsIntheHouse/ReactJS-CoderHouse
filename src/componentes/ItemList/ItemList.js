import React from 'react'
import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemList = ({products}) => {

  //estado del carrito
  

    const addToCart=(id)=>{
        console.log(id)
    }
    
    // const verDetalle=(id_product)=>{

    //   console.log(id_product,'id en Item List')

    //   return(
    //     <>
    //      <ItemDetailContainer products={products} cart={cart} setCart={setCart}/>
    //     </>
    //   )
    // }

  return (
        <>
    <article className='box grid-responsive'>
    
        {products.map(product=> 
        <Item
          key={product.id} 
          data={product}
          addToCart={addToCart}
           />)}
  
           
    </article>
    
    </>
  )
}

export default ItemList