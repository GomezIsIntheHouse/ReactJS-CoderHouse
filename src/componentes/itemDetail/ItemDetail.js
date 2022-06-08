import './ItemDetail.css'
import React from 'react'
import Contador from '../Contador/Contador'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'

const InputCount = ({onConfirm, stock, initial= 1}) => {
  const [count, setCount] = useState(initial)

  const handleChange = (e) => {
      if(e.target.value <= stock) {
          setCount(e.target.value)
      }
  }

  return (
      <div style={{marginLeft:'17px'}}>
          <input type='number' onChange={handleChange} value={count}/>
          <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
      </div>
  )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
      if(count < stock) {
          setCount(count + 1)
      }

  }

  const decrement = () => {
          setCount(count - 1)

  }

  return (
      <div style={{marginLeft:'17px'}}>
          <p style={{background:'grey'}} >{count}</p>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
      </div>
  )
}

const ItemDetail = ({data}) => {
  let{id,name,price,description,img,stock,category}=data

  const {addItem, getProduct}=useContext(CartContext) 
  

  const[quantity,setQuantity]=useState(0)
  const value = useContext(CartContext)

    console.log(value)


    const [inputType, setInputType] = useState('input')

    let ItemCount = inputType === 'input' ? InputCount : ButtonCount

    

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito', quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
        
    }
    
    

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
                    <li>{category}</li>
                    <li>${price}.00</li>
                    
                    <li>stock:{stock}</li>
                </ul>

              </div>
              
              <div className='observaciones'>
                {description}
              </div>

        </div>
         
          <footer className='ItemFooter'>
              <div className='contador'>
                <button className='button' onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                    Cambiar contador
                </button>

              </div>
              <div className='finalizar'>
                { quantity > 0  ? 
                <Link className='button button-finalizar ' to='/cart'>Finalizar compra</Link> 
                // el ? en la sig linea, es pq hay un momento en el que no tengo ningun valor.
                : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProduct(id)?.quantity} />}

              </div>

            </footer>
    </article>  
    </>
  )
}

export default ItemDetail