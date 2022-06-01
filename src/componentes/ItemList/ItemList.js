import React from 'react'
import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemList = ({products, handlePage}) => {

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