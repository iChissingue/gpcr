import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"



const Dashboard = () =>{
    const {data} = useContext(UserContext)


    return (
        <div className="container">
            <h2>Apresentacao de dados</h2>
            <Link to='/login/loginCreate'>Cria Usuario</Link>
        </div>
    )
}

export default Dashboard