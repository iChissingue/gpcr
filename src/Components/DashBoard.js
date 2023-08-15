import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"



const Dashboard = () =>{
    const {data} = useContext(UserContext)


    return (
        <div className="container">
            Ola, <b>{data.name}</b>, Seja bem vindo(a) ao Sistema de Gestao de PCR PFUNEKA!<br/>
           
            <Link style={{margin: '300px 30px 30px 0px'}} to='/login/members'>Membros</Link>
            {data.userCategory_id ===1 && <Link to='/login/loginCreate'>Cria Usuario</Link>}
        </div>
    )
}

export default Dashboard