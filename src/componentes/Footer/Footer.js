import React from 'react'

import {FaInstagram, FaFacebook, FaWhatsapp, FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      
    <footer className="text-center text-lg-start bg-light text-muted">

        <section style={{background:'black'}}
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >

    <div className="me-5 d-none d-lg-block">
      <span>Ponte en contacto mediante nuestras redes:</span>
    </div>
   
    <div >
      <a href="" className="me-4 text-reset">
        <i><FaInstagram/></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i><FaFacebook/></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i ><FaWhatsapp/></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i ><FaYoutube/></i>
      </a>
     
    </div>
   
        </section>
 

  
  
  
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            © 2022  
             <a className="text-reset fw-bold"> JG Informática&Desarrollo</a>
        </div>
        
</footer>

    </div>
  )
}

export default Footer