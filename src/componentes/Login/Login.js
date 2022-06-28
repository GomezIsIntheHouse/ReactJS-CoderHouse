import React from 'react'
import {useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUser,faCalendarCheck, faPhone,faLocationDot, faKey } from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../../Context/AuthContext'

const Login = () => {
   
  const {login,error,setUserLoginControl,userLoginControl} =  useAuth()
   const navigate = useNavigate()
  

    const [user, setUser] = useState({
        password:'',
        email:'',
        
    })


    //con handleInputChange tomo los valores actuales del input y los cargo en el campo de dato de user correspondiente
    const handleInputChange = ({target:{name,value}}) => {
        setUser({...user, [name]: value})
    }
    
    //con handleSubmit trabajo con los datos del registro
    const handleSubmit = async(e) =>{
        e.preventDefault()
         await login(user.email,user.password) 
         setUserLoginControl(!userLoginControl)
         
    }
    
    
    
   

  return (
    
    <div className='hold-transition login-page'>

                <div className='register login-box'>

                    <div className="card p-3 mt-5 ms-3 " >
                        <div className="login-logo brand-logo">
                            <h1 >JG Informática</h1>
                        </div>
                        <div className="card-body login-card-body " >

                            {error && <p className='text-danger' style={{fontSize:'10px'}}>{error}</p>}

                        <form className="form formulario" onSubmit={handleSubmit} >
                                   
                                   
                                  
                               
                                    <div>
                                        {/* {errors.email && <small className='text-danger'>El campo es inválido </small>} */}
                                        </div>
                                    <div className="input-group mb-3"  >
                                        
                                        <input  className="form-control " type="text" name='email'
                                            placeholder="Correo" 
                                            
                                            onChange={handleInputChange}
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                <span><FontAwesomeIcon icon={faAt} /></span>   
                                                </div>
                                        </div>
                                    </div>
                                   
                                        <div>
                                        {/* {errors.password?.type==='min' && <small className='text-danger'></small>} */}
                                

                                        </div>
                                    <div className="input-group mb-3"  style={{width: '100%'}}>
                                        
                                        <input  className="form-control " type="password" id="password"
                                            placeholder="password" 
                                            
                                            onChange={handleInputChange} 
                                            name='password'
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span><FontAwesomeIcon icon={faKey} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                   
                                <div className='comprar-container'>
                                    
                                    
                                    <button className='comprar-carrito' type="submit" >Ingresar</button>
                                </div>
                                    
                                
                                <div className='col-12 mt-2' style={{fontSize:'14px'}}>
                                  <label>¿Aún no tienes cuenta?</label>
                                  <Link to={'/registro'}>
                                      <a style={{marginLeft:'10px'}}> ¡Registrate!</a>
                                  </Link>
                                </div>
                                <div className='col-12'>
                                
                                  <label style={{fontSize:'12px'}} className="mt-1">¿Olvidaste tu contraseña?<small> haz click </small><a style={{color:'blue'}}>aqui</a> </label>
                                  

                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
    </div>

    
  )
}



export default Login