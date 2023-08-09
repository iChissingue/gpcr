import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import { UserContext } from "../../UserContext"
import styles from "../Login/Login.module.css"



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
        <section className={styles.login}>
            <div className={styles.forms}>
                <h2 className={styles.title}>Login</h2>
                <form action=""onSubmit={handdleSubmit} >
                    <Input label="Usuario" type="text" name="username" {...username}/>
                    <Input label="Senha" type="password" name="password" {...password}/>   
                    <Button >Entrar</Button>
                </form>
                
                <Link to='/login/loginCreate'>Cria Usuario</Link>
                <Link to='/login/LoginResetPassword'>Redefinir a senha</Link>
            </div>
        </section>
    )
}

export default LoginForm