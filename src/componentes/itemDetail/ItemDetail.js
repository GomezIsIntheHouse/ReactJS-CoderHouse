import React from 'react'

const ItemDetail = ({name,price,description}) => {
    
  return (
    <div>
        <h1>Detalle del Producto</h1>
        <ul>
            <li>{name}</li>
            <li>{price}</li>
            <li>{description}</li>
        </ul>
    </div>
  )
}

export default ItemDetail