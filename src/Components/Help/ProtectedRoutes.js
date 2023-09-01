import React, {useContext,} from "react"
import { Navigate, Outlet,  } from "react-router-dom"
import { UserContext } from "../../UserContext"

const ProtectedRoutes = () =>{
   const { login } = useContext(UserContext)
    
     if(login ===true){
        return <Outlet />
     }else if(login ===false){
        return <Navigate to={'/login'}/>
     }else{
        return null
     }            
}
export const ProtectedLoginRoute = () =>{
    const { login } = useContext(UserContext)
    
     if(login ===false){
        return <Outlet />
     }else{
      return <Navigate to={'/login/dashboard'}/>
     }            
}

export default ProtectedRoutes