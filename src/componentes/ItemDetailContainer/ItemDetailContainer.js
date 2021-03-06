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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {getItem} from '../../asyncmock'
import ItemDetail from '../itemDetail/ItemDetail'
import React from 'react'
import { useParams } from 'react-router-dom'
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../../services/firebase'

//con el hoock useParams, puedo traer el valor de la url. 
//Con este valor, lo puedo setear en mi funcion de busqueda de detalles
//asi podre traer el detalle particular de cada item

const ItemDetailContainer = () => {

    const [product, setProduct]= useState([]) 
    const [loading, setLoading]=useState(true)
    const {productId}=useParams();

    // console.log(productId)

    useEffect(()=>{

            getDoc(doc(db,'products', productId)).then((response=>{
                const product = {id:response.id,...response.data()}

                setProduct(product)
            })).catch(error=>{console.log(error)}).finally(()=>{setLoading(false)})

        
    },[product])



if(loading){
    return (
        <>
        <div  className="alert alert-info text-center mt-3 animated fadeIn fast">
            <h4 className="alert-heading">Cargando</h4>
            <p className='fa-3x'>
                <i ><FontAwesomeIcon icon={faSpinner}  spinPulse  /></i>
            </p>
            <p className="mb-0">Espere por favor</p>
        </div>
        </>
    )
    

}
  return (
    <div>  
        <ItemDetail data={product} />
    </div>
  )
}

export default ItemDetailContainer