import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Contador from './componentes/Contador/Contador';
import Tarjetas from './componentes/Tarjetas/Tarjetas';
import ShoppingCart from './componentes/Carrito/ShoppingCart';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar />
    <div>
      <Contador />
      <ItemListContainer greeting="Hola Coderss"/>
    </div>
    <hr/>
    {/* <ShoppingCart/> */}
    
    </>

  );
}

export default App;

      // <div className="col-12" style={{marginRight:24}}>
        {/* <Tarjetas/> */}
      {/* </div> */}