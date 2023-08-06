import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   const handdleSubmit = (e) =>{
     e.preventDefault()
        Axios.post('http://localhost:2020/user/login', {username, password}).then(response =>{
            console.log(response)
        })
        
    }
    return (
        <div>
            <h1>Login</h1>
            <form action=""onSubmit={handdleSubmit} >
                <Input label="Usuario" type="text" name="username"/>
                <Input label="Senha" type="password" name="password"/>   
                <Button disabled>Entrar</Button>
            </form>
            
            <Link to='/login/loginCreate'>Cria Usuario</Link>
            <Link to='/login/LoginResetPassword'>Redefinir a senha</Link>
        </div>
    )
}

export default LoginForm