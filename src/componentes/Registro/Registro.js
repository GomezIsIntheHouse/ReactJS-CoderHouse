import React from 'react'
import {useState,useContext } from 'react'
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUser,faCalendarCheck, faPhone,faLocationDot,faKey } from '@fortawesome/free-solid-svg-icons'
import './Registro.css'
import { Link, useNavigate   } from 'react-router-dom';
import Swal from 'sweetalert2'

import {useAuth} from '../../Context/AuthContext'
import CartContext from '../../Context/CartContext';


const Registro = () => {
    const { register,handleSubmit, formState: { errors }, watch } = useForm();
    const {signup} =  useAuth()
    const [loading, setLoading]= useState(false)
    const[error,setError]=useState()
    const navigate = useNavigate  ()
    const {cart, removeItem,removeAll, getTotal}=useContext(CartContext);
    

    const onSubmit =  async(user, e)=> {
       e.preventDefault()
       console.log(user.direccion)
       localStorage.setItem('direccion', user.direccion)
       localStorage.setItem('nombre', user.nombre)
       localStorage.setItem('phone', user.phone)


        try {
            await signup(user.email,user.password)
              setTimeout(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario registrado con éxito',
                    text: user.email,
                    showConfirmButton: true,
                    timer:1000
                    
                })
                navigate('/login')
                
            }, 500);
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                setError('Correo en uso')
                console.log(error.code)
            }
        }

        



    };

 



    

    if(loading){
        return(
          setTimeout(() => {
            Swal.fire({
              title: 'Estamos generando tu orden!',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          })
        
        )
      }
   
   

  return (
    
    <div className='hold-transition login-page'>

                <div className='register login-box'>

                    <div className="card p-3 mt-5 ms-3 " >
                        <div className="login-logo brand-logo">
                            <h1 >JG Informática</h1>
                        </div>
                        <div className="card-body login-card-body " >
                            {error && <p className='text-danger'>{error}</p>}
                            <form className="form formulario" onSubmit={handleSubmit(onSubmit)} >
                                        <div>
                                        {errors.nombre?.type ==='required' && <small className='text-danger'>El campo debe completarse </small>}
                                        {errors.nombre?.type ==='maxLength' && <small className='text-danger'>El campo tiene demasiados caracteres </small>}
                                        {errors.nombre?.type ==='minLength' && <small className='text-danger'>El campo tiene pocos caracteres </small>}
                                        </div>
                                    <div className="input-group mb-3" >
                                        
                                        <input   {...register('nombre',{required:true,maxLength:20,minLength:4})}
                                        className="form-control " type="text" id="nombre"
                                        placeholder="Nombre de usuario" 
                                        name='nombre'
                                        //  value={user.nombre}
                                        //  onChange={handleInputChange }
                                         />
                                    
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span><FontAwesomeIcon icon={faUser} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                 

                                    <div>
                                        {errors.direccion?.type==='required' && <small className='text-danger'>El campo debe completarse </small>}
                                        

                                        </div>
                                    <div className="input-group mb-3"  >
                                        
                                        <input  className="form-control " type="text" id="direccion"
                                            placeholder="Dirección"  
                                            {...register('direccion',{required:true})} 
                                            name='direccion'
                                            // value={user.direccion}
                                         
                                            />
                                    
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span ><FontAwesomeIcon icon={faLocationDot} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                    <div>
                                        {errors.phone && <small className='text-danger'>El campo es inválido </small>}
                                        </div>
                                    <div className="input-group mb-3" >
                                        
                                        <input  className="form-control " type="number" id="nombre"
                                            placeholder="Phone"  {...register('phone',{required:true})}
                                            name='phone'
                                            // value={user.phone}
                                            // onChange={handleInputChange }
                                            />
                                    
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span ><FontAwesomeIcon icon={faPhone} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                    <div>
                                        {errors.email && <small className='text-danger'>El campo es inválido </small>}
                                        </div>
                                    <div className="input-group mb-3"  >
                                        
                                        <input  className="form-control " type="text" 
                                            placeholder="Correo" {...register('email',{required:true})}
                                            name='email'
                                            // value={user.email}
                                            // onChange={handleInputChange }
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                <span><FontAwesomeIcon icon={faAt} /></span>   
                                                </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3"  style={{width: '100%'}}>
                                        
                                        <input  className="form-control " type="password" id="password"
                                            placeholder="password" {...register('password',{required:true,min:5})}
                                            // value={user.password}
                                            // onChange={handleInputChange } 
                                            name='password'
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span><FontAwesomeIcon icon={faKey} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                   
                                        <div>
                                        {errors.edad?.type==='min' && <small className='text-danger'>Debes ser mayor para comprar en este sitio</small>}
                                        {errors.edad?.type==='max' && <small className='text-danger'>Demasiados años!</small>}

                                        </div>
                                    <div className="input-group mb-3"  style={{width: '100%'}}>
                                        
                                        <input  className="form-control " type="number" id="edad"
                                            placeholder="Edad" {...register('edad',{required:true,min:16,max:95})}
                                            name='edad'
                                            // value={user.edad}
                                            // onChange={handleInputChange }
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span><FontAwesomeIcon icon={faCalendarCheck} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                   
                                <div className='comprar-container'>
                                    
                                    
                                    <button className='comprar-carrito' type="submit"  >Crear Usuario</button>
                                </div>
                                    
                                {/* <div className='col-12'>
                                <label style={{fontSize:'12px'}} className="mt-4">Al comprar aceptas recibir encuestas y/o ofertas de #JG.Informática</label>

                                </div> */}
                                <div className='col-12 mt-3 ms-3' style={{fontSize:'14px'}}>
                                    <label> ¿Ya tienes cuenta?</label>
                                <Link to={'/login'}>
                                    <a style={{marginLeft:'15px'}}>¡Ingresar!</a>
                                </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
    </div>

    
  )
}





// const Registro=()=>{
//     const [buyer,setBuyer]=useState({
//         buyer:{
//             name:'',
//             phone:'',
//             email:''
    
//         }
//     })

//     return(
//         <>
//          <div className="card-body login-card-body">
//                     <form class="form" onSubmit={this.handleSubmit}>
//                         <label>nombre</label>
//                         <input value={buyer.name} onChange={(e)=>{setBuyer({...buyer,name:e.target.value})}}></input>
//                         <label>Email</label>
//                         <input type={'email'} value={buyer.email} onChange={(e)=>{setBuyer({...buyer,email:e.target.value})}} ></input>
//                         <label>Telefono</label>
//                         <input value={buyer.phone} onChange={(e)=>{setBuyer({...buyer,phone:e.target.value})}} ></input>

//                     </form>
//                 </div>

//         {/* <div className="login-box">
//             <div className="card p-3 mt-5">
               
//             </div>
//         </div> */}
    
//         </>
//     )
// }

// // const Registro = () => {
// //   return (
// //     <div>Registro</div>
// //   )
// // }

export default Registro