import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"



const Dashboard = () =>{
    const {data} = useContext(UserContext)


    return (
        <div className="container">
            <h2>Apresentacao de dados</h2>
            <Link style={{margin: '30px 30px 30px 0'}} to='/login/members'>Membros</Link>
            <Link to='/login/loginCreate'>Cria Usuario</Link>
        </div>
    )
}

export default Dashboard