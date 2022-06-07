import React from 'react'
import {getProducts,getProductsByCategory} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

function ItemListContainer({greeting, handlePAge}) {
    const [products, setProducts]= useState([]) 
    const [loading, setLoading]=useState(true)
    const {categoryId}=useParams();



    useEffect(()=>{
      if(!categoryId){
        getProducts().then(response =>{
          setProducts(response)
      }).finally(()=>setLoading(false));
      }else{
        
        getProductsByCategory(categoryId).then(response =>{
          setProducts(response)
        }).finally(()=>setLoading(false))
    }  
    }
    ,[categoryId])

    if(loading){
      return (
          <>
          <div  class="alert alert-info text-center mt-3 animated fadeIn fast">
              <h4 class="alert-heading">Cargando</h4>
              <p>
                  <i class="fas fa-sync-alt fa-spin fa-2x"></i>
              </p>
              <p class="mb-0">Espere por favor</p>
          </div>
          </>
      )
      
    
    }
  return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemList products={products} handlePage={handlePAge}/>
        

    </div>
  )
}

export default ItemListContainer