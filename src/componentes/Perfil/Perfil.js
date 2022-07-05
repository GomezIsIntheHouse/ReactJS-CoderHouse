import CartContext from '../../Context/CartContext';
import {useAuth} from '../../Context/AuthContext'
import React,{useContext} from 'react'
import Swal from 'sweetalert2'
import './Perfil.css'

const Perfil = () => {
    const {user,logout} =  useAuth()
    const {cart, removeItem,removeAll,getTotal,quantity}=useContext(CartContext);
    const handleLogout = async()=>{

        await logout()
       
    }
  return (
    <div className='card mt-3 card-perfil'>

    <h5 className='card-header card-header-perfil'>Perfil de {user?.email}</h5>
    <div className='card-body'>
        {user?
        <><div className=''><button className='btn btn-danger' onClick={()=>{
            Swal.fire({
    
              title: `¿Seguro desea salir? `,
              showDenyButton: true,
              confirmButtonText: 'Aceptar'
              
            }).then((result)=>{
              if(result.isConfirmed){
                removeAll()
                Swal.fire('Muchas gracias por su visita', '', 'info')
                setTimeout(() => {
                  handleLogout()
                }, 500);
              }

            })
            
          }}>Logout</button></div></>:
        <></>}
    </div>
    </div>
  )
}

export default Perfil