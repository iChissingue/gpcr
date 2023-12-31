import React, { useContext } from "react"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import { UserContext } from "../../UserContext"


const LoginCreate = () =>{
    const {createUser, error, loading} = useContext(UserContext)
    const name = useForm()
    const username = useForm()
    const password = useForm()
    const confirmPassword = useForm()
    const userCategory = useForm()
    const userState = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
   
        if(
            name.validate() && 
            username.validate() && 
            password.validate() &&
            confirmPassword.validate() &&
            userCategory.validate() &&
            userState.validate()
            ){
                  
            createUser(name.value, 
                username.value, 
                password.value, 
                confirmPassword.value, 
                userCategory.value, 
                userState.value)
            
        }    
      }

    return (
        <div className="container">
            <p style={{textAlign: 'right', color: '#ff2e1b'}}>{error}</p>
            <h2>Cricao de Usuario</h2>
            <Input label="Nome Completo" type="text" name="name" {...name}/>
            <Input label="Nome do Usuario" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            <Input label="Senha de Confirmacao" type="password" name="confirmPassword" {...confirmPassword}/>
            <Input label="Categoria" type="text" name="userCategory" {...userCategory}/>
            <Input label="Estado do Usuario" type="text" name="userState" {...userState}/>
            <Button onClick={handdleSubmit}>Criar</Button>
        </div>
    )
}

export default LoginCreate