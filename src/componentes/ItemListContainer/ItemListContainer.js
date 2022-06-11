import React from 'react'
import {getProducts,getProductsByCategory} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

import {getDocs, collection, doc, query,where} from 'firebase/firestore'
import {db} from '../../services/firebase'

function ItemListContainer({greeting, handlePAge}) {
    const [products, setProducts]= useState([]) 
    const [loading, setLoading]=useState(true)
    const {categoryId}=useParams();



    useEffect(()=>{
      setLoading(true)
      const collectionRef = categoryId ? query(collection(db,'products'), where('category','==', categoryId)):collection(db,'products')

      getDocs(collectionRef).then(response=>{
        // console.log(response.docs)
        const products = response.docs.map(doc=>{
          return {id:doc.id, ...doc.data()}

        })
        setProducts(products)
        console.log(products)
    })
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false))}
    ,[categoryId])

    if(loading){
      return (
          <>
          <div  className="alert alert-info text-center mt-3 animated fadeIn fast">
              <h4 className="alert-heading">Cargando</h4>
              <p>
                  <i className="fas fa-sync-alt fa-spin fa-2x"></i>
              </p>
              <p className="mb-0">Espere por favor</p>
          </div>
          </>
      )
      
    
    }
  return (
    <div>
        <h1>{greeting}</h1>
        {products.length>0 ? <ItemList products={products} handlePage={handlePAge}/> :
         <div  className="alert alert-info text-center mt-3 animated fadeIn fast">
              <h4 className="alert-heading">No hay elementos para mostrar</h4>
              <p>
                  <i className="fas fa-sync-alt fa-spin fa-2x"></i>
              </p>
              <p className="mb-0">Regrese más tarde</p>
          </div>}
        
        

    </div>
  )
}

export default ItemListContainer