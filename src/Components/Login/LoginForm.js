import Axios from "axios"
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import { URL_POST } from "../../Hooks/Api"
import { USER_GET } from "../../Hooks/Api"
import { UserContext } from "../../UserContext"



const LoginForm = () =>{
   const usernameSet = useForm()
   const passwordSet = useForm()
   const user = useContext(UserContext)

   useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token){
            getUser(token)
        }
   }, [])

   const getUser = async (token) =>{
        const { url, headers } = USER_GET(token)
        const response = await Axios.get(url, {headers: headers})
        console.log(response)
   }

   const handdleSubmit = async (e) =>{
     e.preventDefault()

     if(usernameSet.validate() && passwordSet.validate()){
        const {value: username} = usernameSet
        const {value: password} = passwordSet 
        const loginValues = {username, password}
        
        await Axios.post(URL_POST, loginValues)
            .then(response =>{
             window.localStorage.setItem(
                'token', 
                response.data.token
            )
            getUser(response.data.token)
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