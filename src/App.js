import React,{createContext, useState} from 'react';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Contador from './componentes/Contador/Contador';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import CartWidget from './componentes/CartWidget/CartWidget';
import Cart from './componentes/Cart/Cart';
import {CartContextProvider}from './Context/CartContext'


function App() {

  



  return (
    <>
    
      {/* value={{ cart, addItem, getQuantity}} */}
    <CartContextProvider >
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="BIENVENIDOS! "/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer />}  />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria" />}  />
        <Route path='/about' element={<h1>About de JG</h1>}/>
        <Route path='/contacto' element={<h1>Contacto de JG</h1>}/>
        <Route path='/productos' element={<h1>Productos de JG</h1>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='*' element={<h1>PAGE NOT FOUND - AQUI PODRIA RENDERIZAR MI PROPIO UI </h1>}/>

      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
    </>

  );
}

export default App;

      // <div className="col-12" style={{marginRight:24}}>
        {/* <Tarjetas/> */}
      {/* </div> */}