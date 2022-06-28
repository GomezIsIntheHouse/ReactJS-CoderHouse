import React from 'react';
import './App.css';

import Navbar from './componentes/Navbar/Navbar';


import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Cart from './componentes/Cart/Cart';
import {CartContextProvider}from './Context/CartContext'
import Registro from './componentes/Registro/Registro';
import CartDetail from './componentes/CartDetail/CartDetail';
import { AuthProvider } from './Context/AuthContext';
import Register from './componentes/Register/Register';
import Login from './componentes/Login/Login';
import { ProtectedRoute } from './componentes/ProtectedRoute/ProtectedRoute';



function App() {

  


  return (
    <>
    
      {/* value={{ cart, addItem, getQuantity}} */}
      
      <CartContextProvider >
      <AuthProvider >
          <Navbar /> 
            <Routes>
              <Route path='/' element={
                 
                   <ItemListContainer greeting="Bienvenido! "/>
                
                   }/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}  />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria" />}  />
             
              <Route path='/cart' element={
                <ProtectedRoute>

                  <Cart/>
                </ProtectedRoute>
              
              }/>
              <Route path='/registro' element={<Registro/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/cart-detail' element={<CartDetail/>}/>
              <Route path='/login' element={<Login/>}/>
             
              <Route path='*' element={<h1>PAGE NOT FOUND - AQUI PODRIA RENDERIZAR MI PROPIO UI </h1>}/>

          </Routes>
        </AuthProvider>
      </CartContextProvider>
      
    
    </>

  );
}

export default App;

      // <div className="col-12" style={{marginRight:24}}>
        {/* <Tarjetas/> */}
      {/* </div> */}