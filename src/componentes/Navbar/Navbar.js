import React, {Component} from 'react';
// import { useHref } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link to='/' className='brand'>
        
            JG Informática
        </Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
                
        <ul className="navbar-nav ">

             <li className="nav-item">
            
            <Link className="nav-link" to='/'>Home</Link>
            
            </li>
            <li className="nav-item">
           
            <Link to='/category/celular' className="nav-link">Celulares</Link>
            </li>
            <li className="nav-item">
           
            <Link to='/category/tablet' className="nav-link">Tablet</Link>
            </li>
            <li className="nav-item">
          
            <Link to='/category/accesorio-computacion' className="nav-link">Acessorios de Computación</Link>

            </li>
            <li className="nav-item">
          
          <Link to='/category/accesorio-celular' className="nav-link">Acessorios de Celulares</Link>

          </li>
            <li className="nav-item "  style={{}}>
                <Link className="nav-link" to='/cart'><CartWidget/></Link>
                
            </li>

           
        </ul>
        </div>
  </div>
</nav>
        )
    }
}