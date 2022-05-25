import React from 'react'
import {getProducts} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {
    const [products, setProducts]= useState([]) 

    useEffect(()=>{
        getProducts().then(response =>{
            setProducts(response)

        });
    },[])
 
    

  return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemList products={products}/>
        

    </div>
  )
}

export default ItemListContainer