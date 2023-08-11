import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import LoginResetPassword from "./LoginResetPassword"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import { UserContext } from "../../UserContext"
import Dashboard from "../DashBoard"
import Members from "../Members"



const Login = () =>{
    const { login } = useContext(UserContext)

    if(login ===true) <Navigate to="/login/dashboard"/>
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/loginResetPassword" element={<LoginResetPassword/>}/>
            <Route path="/loginCreate" element={<LoginCreate/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/members" element={<Members/>}/>
        </Routes>    
    )
}

export default Login