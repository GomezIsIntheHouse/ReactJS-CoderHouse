import React, {Component} from 'react';
import imagen_1 from '../../assets/imagenes/spiderman.png'
import imagen_2 from '../../assets/imagenes/hulk.png'
import imagen_3 from '../../assets/imagenes/aquaman.png'



export default class Tarjetas extends Component{
    render(){
        return(
           
            <div className="card"  style={{width:400,heigth:150}}>
                
                <div className="card-body">
                    <h4 className="card-title text-dark">Titulo de la tarjeta</h4>

                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={imagen_1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={imagen_2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={imagen_3} className="d-block w-100" alt="..."/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    
                    <span className="visually-hidden">Next</span>
                </button>

                </div>
                    {/* <p className="card-text text-dark" >Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                </div>
          
        )
    }
}