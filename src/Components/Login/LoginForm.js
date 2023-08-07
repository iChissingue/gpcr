import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () =>{
   const usernameSet = useForm()
   const passwordSet = useForm()
   const url = 'http://localhost:2020/user/login'

   const handdleSubmit = async (e) =>{
     e.preventDefault()

     if(usernameSet.validate() && passwordSet.validate()){
        const {value: username} = usernameSet
        const {value: password} = passwordSet 
        const loginValues = {username, password}
        
        await Axios.post(url, loginValues).then(response =>{
             console.log(response.data)
         })
     }    
   }
    return (
        <div>
            <h1>Login</h1>
            <form action=""onSubmit={handdleSubmit} >
                <Input label="Usuario" type="text" name="username" {...usernameSet}/>
                <Input label="Senha" type="password" name="password" {...passwordSet}/>   
                <Button >Entrar</Button>
            </form>
            
            <Link to='/login/loginCreate'>Cria Usuario</Link>
            <Link to='/login/LoginResetPassword'>Redefinir a senha</Link>
        </div>
    )
}

export default LoginForm