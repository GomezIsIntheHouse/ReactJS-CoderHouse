import React from 'react'
import { useState,createContext } from 'react'


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        return total
    }
   
    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu =accu + parseInt(prod.quantity)
        })
    console.log(accu)
        return accu
    }

    const isInCart = (id) => {
        //pregunta si existe algun producto con ese id recibido. Devuelve true or false
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }
    const removeAll = ()=>{
        const newCart = [];
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, getQuantity, getProduct, removeItem, removeAll,getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext