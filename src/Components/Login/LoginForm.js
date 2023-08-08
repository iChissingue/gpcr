import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import { UserContext } from "../../UserContext"



const LoginForm = () =>{
   const username = useForm()
   const password = useForm()
   const {userLogin} = useContext(UserContext)

   const handdleSubmit = async (e) =>{
     e.preventDefault()

     if(username.validate() && password.validate()){
               
         userLogin(username.value, password.value)
     }    
   }
    return (
        <div>
            <h1>Login</h1>
            <form action=""onSubmit={handdleSubmit} >
                <Input label="Usuario" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>   
                <Button >Entrar</Button>
            </form>
            
            <Link to='/login/loginCreate'>Cria Usuario</Link>
            <Link to='/login/LoginResetPassword'>Redefinir a senha</Link>
        </div>
    )
}

export default LoginForm