/* aca se inserta una card que muestre el detalle del producto
dentro tendremos itemDetail --> una card con mas detalles

aca deberemos ejecutar una funcion, de la manera:

   useEffect(()=>{
        getProduct().then(response =>{
            setProducts(response)

        });
    },[])
 pero en este caso no traera un listado, sino que traera un solo elemento de la lista.

*/
import {getProducts, getProduct} from '../../asyncmock'
import {useState, useEffect} from 'react'

import ItemDetail from '../itemDetail/ItemDetail'
import React from 'react'

const ItemDetailContainer = ({id}) => {
   console.log('en ItemDetailContainer',id)
    
    // console.log('Id en ItemDetailContainer')

     const [products, setProducts]= useState([]) 

    useEffect(()=>{
        getProduct().then(response =>{
            
            setProducts(response)
            
        });
    },[])
 
  return (
    <div>
        <h1></h1>
        {/* aca tendria que pasar la informacion del producto individual por props */}
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer