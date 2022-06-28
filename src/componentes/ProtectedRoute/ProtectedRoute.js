import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}){
    const {user, loading,userLoginControl}=useAuth()
    // if(loading) return <h1>loading...</h1>

    if(!user || !userLoginControl ) return <Navigate to={'/login'}/>
    console.log(user)
       


    return <>{children}</>
}