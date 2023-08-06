import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () =>{

    return (
        <div>
            Login Form
            <Link to='/login/loginCreate'>Cria Usuario</Link>
            </div>
    )
}

export default LoginForm