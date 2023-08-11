import React, {useContext,} from "react"
import { Navigate, Outlet,  } from "react-router-dom"
import { UserContext } from "../../UserContext"

const ProtectedRoutes = () =>{
    const { login } = useContext(UserContext)
    
    return login?
        <Outlet />
            : <Navigate to={'/login'}/>
}

export default ProtectedRoutes