import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import styles from "../Login/Login.module.css"
import { UserContext } from "../../UserContext"




const LoginForm = () =>{
   const username = useForm()
   const password = useForm()
   const {userLogin, error, loading} = useContext(UserContext)

   const handdleSubmit = async (e) =>{
     e.preventDefault()

     if(username.validate() && password.validate()){
               
         userLogin(username.value, password.value)
     }    
   }
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                {error && <p>{error}</p>}
                <h2 className={styles.title}>Login</h2>
                <form action=""onSubmit={handdleSubmit} >
                    <Input label="Usuário" type="text" name="username" {...username}/>
                    <Input label="Senha" type="password" name="password" {...password}/>  
                    {loading? (
                        <Button disabled>Carregando...</Button>
                    )
                       : (<Button >Entrar</Button>)}
                            
                </form>
                
                
                <Link to='/login/LoginResetPassword'>Redefinir a senha</Link>
            </div>
        </section>
    )
}

export default LoginForm