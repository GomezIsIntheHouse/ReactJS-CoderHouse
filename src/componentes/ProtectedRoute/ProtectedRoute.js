import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}){
    const {user, loading,userLoginControl}=useAuth()
    console.log(user?.email, userLoginControl)

    if(!user) return <Navigate to={'/login'}/>
    // console.log(user)
       


    return <>{children}</>
}