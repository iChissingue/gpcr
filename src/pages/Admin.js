import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"

const Admin = () =>{
    const { data } = useContext(UserContext)

    return (
        <div className="container">
            <h2 style={{color: 'blue'}}>Adminiatração</h2>
            {data.userCategory_id ===1 && <Link to='/login/loginCreate'>Cria Usuario</Link>}
        </div>
    )
}

export default Admin