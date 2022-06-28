import {  createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../services/firebase'
import { useNavigate } from "react-router-dom";
import {addDoc, collection,doc, updateDoc,getDocs,query,where,documentId,writeBatch, getDoc, querySnapshot} from 'firebase/firestore'
import {db} from '../services/firebase'
import { onValue, ref } from "firebase/database";
export const AuthContext = createContext()

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context) throw new Error ('There is not auth providers')
    return context
}

export function AuthProvider ({children}){
    const [error, setError] = useState()

    const [userLoginControl, setUserLoginControl]=useState(false)
    
    const navegar = useNavigate()

    const [user,setUser] = useState(null)

    const [dataUser,setDataUser] = useState(null)

    const [loadingAuth, setLoadingAuth] = useState(true)   
    
    const signup = (email,password)=>{ createUserWithEmailAndPassword(auth, email, password).then(()=>{
        console.log('error en sing up',error.code)
        if(error.code === 'auth/email-already-in-use'){
            setError(true)
        }
        if(error.code ==='' | error.code === undefined){
            setError(false)
        }
    }).catch((e)=>{
        if (e.code === '' || e.code===undefined){
            // setError('correo en uso')
            console.log('error en catch sing up',e.code)
            // setError(false)
            // console.log(error)
        }else{
            // setError(true)
            // console.log(error)
            console.log('error en catch sing up',e.code)
        }
        
    })
}

    const login = async(email,password)=> {
       await signInWithEmailAndPassword(auth, email, password)
       .then(()=>{

        navegar('/cart')} ,setError(false),localStorage.setItem('email',email),setUserLoginControl(true))

        .catch((error)=>{

         console.log(error.code)
        if(error.code === 'auth/invalid-email'){

            setError('correo inválido')
        }
        if(error.code === 'auth/weak-password'){

            setError('password inválida')
        }
        if(error.code === 'auth/email-already-in-use'){

            setError('correo en uso')
        }
        
        if(error.code === 'auth/wrong-password'){

          setError('contraseña incorrecta')
      }

      if(error.code === 'auth/user-not-found'){
       setError('Este correo no esta vinculado a ninguna cuenta ')
      }
    })
    
       
    }
    const logout = ()=>{
        if(user){

            const logout = signOut(auth)
            console.log('deslogueo exitoso')
            localStorage.removeItem('email')
            localStorage.removeItem('nombre')
            localStorage.removeItem('direccion')
        }
        return ()=>logout();
    }

    useEffect(() => {
        // console.log('auth provider loader')
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setUserLoginControl(false)
            setLoadingAuth(false)
        })
        return ()=>unsubscribe();
    }, []);

    
        


    // const a = onAuthStateChanged()
// mediante user, envio los datos del usuario logueado.
    return (
        <AuthContext.Provider value ={{signup, login, user, logout, loadingAuth, error, setError, userLoginControl, setUserLoginControl }}>
            {children}
        </AuthContext.Provider>
    )
}