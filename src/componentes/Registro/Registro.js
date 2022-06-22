import React from 'react'
import {useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUser,faKey, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Registro.css'

const Registro = ({buyer,setBuyer}) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => console.log(data);

    // const[email,SetEmail]= useState('')
    // const[name,SetName]= useState('')
    // const[phone,SetPhone]= useState('')
    // const[direccion,SetDireccion]= useState('')
    // const[edad,SetEdad]= useState('')


    
    const mostrar = ()=>{
        console.log(buyer)
    }
   

  return (
    
    <div className='hold-transition login-page'>

                <div className='register login-box'>

                    <div className="card p-3 mt-5 ms-3 " >
                        <div className="login-logo brand-logo">
                            <h1 >JG Informática</h1>
                        </div>
                        <div className="card-body login-card-body " >
                            <form className="form formulario" onSubmit={ev =>{ev.preventDefault();handleSubmit(onSubmit)}} >
                                        <div>
                                        {errors.name?.type ==='required' && <small className='text-danger'>El campo debe completarse </small>}
                                        {errors.name?.type ==='maxLength' && <small className='text-danger'>El campo tiene demasiados caracteres </small>}
                                        {errors.name?.type ==='minLength' && <small className='text-danger'>El campo tiene pocos caracteres </small>}
                                        </div>
                                    <div className="input-group mb-3" >
                                        
                                        <input   {...register('name',{required:true,maxLength:20,minLength:4})}
                                        className="form-control " type="text" id="nombre"
                                        placeholder="Nombre de usuario" 
                                        value={buyer.name} onChange={(e)=>{setBuyer(...buyer, buyer.name=e.target.value)}}/>
                                    
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
                                            placeholder="Dirección"  {...register('direccion',{required:true})} 
                                            value={buyer.direccion}
                                            onChange={(e)=>{setBuyer(...buyer, buyer.direccion=e.target.value)}}
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
                                            value={buyer.phone}
                                            onChange={(e)=>{setBuyer(...buyer, buyer.phone=e.target.value)}}
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
                                            value={buyer.email}
                                            onChange={(e)=>{setBuyer(...buyer, buyer.email=e.target.value)}}
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                <span><FontAwesomeIcon icon={faAt} /></span>   
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
                                            value={buyer.edad}
                                            onChange={(e)=>{setBuyer(buyer.edad=e.target.value)}}
                                            />
                                        
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span><FontAwesomeIcon icon={faKey} /></span>  
                                                </div>
                                        </div>
                                    </div>
                                <div className='comprar-container'>

                                    <button className='comprar-carrito' type="submit" >Cargar Datos</button>
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