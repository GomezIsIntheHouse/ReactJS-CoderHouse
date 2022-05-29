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
// import {getProducts, getProduct} from '../../asyncmock'
import {useState, useEffect} from 'react'

import {getItem} from '../../asyncmock'
import ItemDetail from '../itemDetail/ItemDetail'
import React from 'react'

const ItemDetailContainer = () => {

     const [item, setItem]= useState([]) 

    useEffect(()=>{
        getItem(9).then(response =>{
            setItem(response)

        });
    },[item])

console.log(item)
 
  return (
    <div>
        <h1></h1>
        {/* aca tendria que pasar la informacion del producto individual por props */}
        <ItemDetail {...item}/>
    </div>
  )
}

export default ItemDetailContainer