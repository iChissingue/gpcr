import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginResetPassword from "./LoginResetPassword"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"


const Login = () =>{
    return (
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/login/loginResetPassword" element={<LoginResetPassword/>}/>
            <Route path="/loginCreate" element={<LoginCreate/>}/>
        </Routes>    
    )
}

export default Login