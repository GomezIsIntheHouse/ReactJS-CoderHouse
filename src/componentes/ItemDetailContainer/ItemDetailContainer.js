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
import { useParams } from 'react-router-dom'
//con el hoock useParams, puedo traer el valor de la url. 
//Con este valor, lo puedo setear en mi funcion de busqueda de detalles
//asi podre traer el detalle particular de cada item

const ItemDetailContainer = () => {

    const [product, setProduct]= useState([]) 
    
    const {productId}=useParams();

    console.log(productId)

    useEffect(()=>{
        getItem(productId).then(response =>{
            setProduct(response)
        });
    },[product])

console.log(product)
 
  return (
    <div>
        <h1></h1>
        {/* aca tendria que pasar la informacion del producto individual por props {...item} */}
        <ItemDetail data={product} />
    </div>
  )
}

export default ItemDetailContainer