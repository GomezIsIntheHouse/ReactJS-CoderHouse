import React from 'react'
import {useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUser,faCalendarCheck, faPhone,faLocationDot, faKey } from '@fortawesome/free-solid-svg-icons'
import './Register.css'
import { Link,useNavigate } from 'react-router-dom';
import {useAuth} from '../../Context/AuthContext'

const Register = () => {
    const { register, formState: { errors }, watch } = useForm();
    const onSubmit = data => console.log(data);
   const navigate =useNavigate()
   const [error,setError]= useState()

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
        setError('')
       try {
        await signup(user.email,user.password)
        navigate('/')
       } catch (error) {

        if(error.code === 'auth/invalid-email'){

            setError('correo inválido')
        }
        if(error.code === 'auth/weak-password'){

            setError('password inválida')
        }
        if(error.code === 'auth/email-already-in-use'){

            setError('correo en uso')
        }
       }
    }
    
    const {signup} =  useAuth()
    
   

  return (
    
    <div className='hold-transition login-page'>

                <div className='register login-box'>

                    <div className="card p-3 mt-5 ms-3 " >
                        <div className="login-logo brand-logo">
                            <h1 >JG Informática</h1>
                        </div>
                        <div className="card-body login-card-body " >
                            {error && <p className='text-danger'>{error}</p>}
                        <form className="form formulario" onSubmit={handleSubmit} >
                                   
                                   
                                  
                               
                                    <div>
                                        {errors.email && <small className='text-danger'>El campo es inválido </small>}
                                        </div>
                                    <div className="input-group mb-3"  >
                                        
                                        <input  className="form-control " type="text" name='email'
                                            placeholder="Correo" {...register('email',{required:true})}
                                            // value={user.email}
                                            onChange={handleInputChange}
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                <span><FontAwesomeIcon icon={faAt} /></span>   
                                                </div>
                                        </div>
                                    </div>
                                   
                                        <div>
                                        {errors.password?.type==='min' && <small className='text-danger'></small>}
                                

                                        </div>
                                    <div className="input-group mb-3"  style={{width: '100%'}}>
                                        
                                        <input  className="form-control " type="password" id="password"
                                            placeholder="password" {...register('password',{required:true,min:5})}
                                            // value={user.edad}
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
                                    
                                    
                                    <button className='comprar-carrito' type="submit" >Crear Usuario</button>
                                </div>
                                    
                                <div className='col-12'>
                                <label style={{fontSize:'12px'}} className="mt-4">Al comprar aceptas recibir encuestas y/o ofertas de #JG.Informática</label>

                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
    </div>

    
  )
}



export default Register