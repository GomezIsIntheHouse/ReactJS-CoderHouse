import React, {Component} from 'react';
import CartWidget from '../CartWidget/CartWidget';

// import CartWidget from '../CartWidget/CartWidget';
//import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
        <a className="navbar-brand" href="#">JG Informática</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
                
        <ul className="navbar-nav">

            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link ">Contacto</a>
            </li>
            <div className="col-12 d-flex justify-content-end me-5 mt-2"></div>
            <li className="nav-item">
                <CartWidget  />
            </li>
           
        </ul>
        </div>
  </div>
</nav>
        )
    }
}