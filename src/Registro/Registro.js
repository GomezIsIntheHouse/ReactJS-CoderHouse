import React from 'react'
import {useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faUser,faKey, faPhone } from '@fortawesome/free-solid-svg-icons'

const Registro = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => console.log(data);

    // const [buyer, setBuyer]= useState(
    //     {buyer:{
    //       name: '',
    //       email:'',
    //       phone:'',
    //       password:'',
    //       password2:''
    //     }}
    //   )

    const [passInput, SetPassInput]=useState(false)
    useEffect(() => {
       let pass1 =  watch('passw1')
       let pass2 = watch('passw2')
       if(pass1 != pass2){
            SetPassInput(false)
       }
    });

  return (

    <div className='col-12'>
     
        


      

        <div className="card p-3 mt-5 ms-3 col" style={{width:'500px'}} >
            <div className="card-body login-card-body " >
                <form className="form" onSubmit={handleSubmit(onSubmit)} style={{width:'400px'}}>
                            <div>
                             {errors.name?.type ==='required' && <small className='text-danger'>El campo debe completarse </small>}
                             {errors.name?.type ==='maxLength' && <small className='text-danger'>El campo tiene demasiados caracteres </small>}
                             {errors.name?.type ==='minLength' && <small className='text-danger'>El campo tiene pocos caracteres </small>}
                            </div>
                        <div className="input-group mb-3" >
                            
                            <input   {...register('name',{required:true,maxLength:10,minLength:4})}
                            className="form-control " type="text" id="nombre"
                            placeholder="Nombre de usuario"/>
                          
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span><FontAwesomeIcon icon={faUser} /></span>  
                                    </div>
                            </div>
                        </div>
                        <div>
                             {errors.age?.type==='required' && <small className='text-danger'>El campo debe completarse </small>}
                             {errors.age?.type==='min' && <small className='text-danger'>Debes tener al menos 10 años</small>}
                             {errors.age?.type==='max' && <small className='text-danger'>Edad máxima es 100 años</small>}


                            </div>
                        <div className="input-group mb-3"  style={{width: '80%'}}>
                            
                            <input  className="form-control " type="text" id="age"
                                placeholder="Edad"  {...register('age',{required:true,min:10,max:100})}/>
                          
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span ><FontAwesomeIcon icon={faPhone} /></span>  
                                    </div>
                            </div>
                        </div>
                        <div>
                             {errors.phone && <small className='text-danger'>El campo es inválido </small>}
                            </div>
                        <div className="input-group mb-3"  style={{width: '100%'}}>
                            
                            <input  className="form-control " type="text" id="nombre"
                                placeholder="Phone"  {...register('phone')}/>
                          
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span ><FontAwesomeIcon icon={faPhone} /></span>  
                                    </div>
                            </div>
                        </div>
                        <div>
                             {errors.email && <small className='text-danger'>El campo es inválido </small>}
                            </div>
                        <div className="input-group mb-3"  style={{width: '100%'}}>
                            
                            <input  className="form-control " type="text" 
                                placeholder="Correo" {...register('Email')}/>
                            
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span><FontAwesomeIcon icon={faAt} /></span>   
                                    </div>
                            </div>
                        </div>
                        <div>
                             {errors.passw1 && <small className='text-danger'>El campo es inválido </small>}
                            </div>
                          <div className="input-group mb-3"  style={{width: '100%'}}>
                            
                            <input  className="form-control " type="password" id="nombre"
                                placeholder="Password" {...register('passw1',{required:true})}/>
                           
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span><FontAwesomeIcon icon={faKey} /></span>  
                                    </div>
                            </div>
                        </div>
                        <div>
                             {errors.passw2 && <small className='text-danger'>{errors.pass2.message}</small>}
                            </div>
                        <div className="input-group mb-3"  style={{width: '100%'}}>
                            
                            <input  className="form-control " type="password" id="nombre"
                                placeholder="Reingrese password" {...register('passw2',{required:true,message:"Password deben ser iguales",validate:passInput})}/>
                            
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span><FontAwesomeIcon icon={faKey} /></span>  
                                    </div>
                            </div>
                        </div>
                       
                        <button type="submit" >Crear usuario</button>
                </form>
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