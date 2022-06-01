import './ItemDetail.css'
import React from 'react'
import Contador from '../Contador/Contador'

const ItemDetail = ({data}) => {
    let{name,price,description,img,stock}=data
  return (
    <>
        <h1>Detalle de  <small>{name}</small> </h1>
      <article className='box grid-responsive' style={{width:'80%'}}>
        <div className='detail-cointainer'>

              <div className='img-container'>
                <img alt='asd' className='img' src={img}/>
              </div>
              <div className='description'>
                <ul>
                    <li>{name}</li>
                    <li>${price}.00</li>
                    
                    <li>stock:{stock}</li>
                </ul>

              </div>
              
              <div className='observaciones'>
                {description}
              </div>

        </div>
          <div className='contador'>
            <Contador stock={stock} />
          </div>
    </article>  
    </>
  )
}

export default ItemDetail