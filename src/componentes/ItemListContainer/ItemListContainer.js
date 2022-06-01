import React from 'react'
import {getProducts,getProductsByCategory} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

function ItemListContainer({greeting, handlePAge}) {
    const [products, setProducts]= useState([]) 

    const {categoryId}=useParams();



    useEffect(()=>{
      if(!categoryId){
        getProducts().then(response =>{
          setProducts(response)
      });
      }else{
        
        getProductsByCategory(categoryId).then(response =>{
          setProducts(response)
        })
    }  
    },[categoryId])
 
  return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemList products={products} handlePage={handlePAge}/>
        

    </div>
  )
}

export default ItemListContainer