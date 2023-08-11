import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"


const Members = () =>{
   const { membersData } = useContext(UserContext) 
   
    return (
        <div className="container" style={{backgroundColor: '#eee'}}> 
            <h2>Lista dos Membros</h2>
            { membersData && membersData.map(member => (
               <p style={{marginBottom: '10px', backgroundColor: '#eee'}}>
                    {`
                        Nome: ${member.name } | 
                        Data de Admissao: ${member.admissionDate}
                    `}
               </p>  
            ))}
            <Link style={{textDecoration: 'underline', marginRight: '30px'}} to="/members/add" >Adicionar Membro</Link>
            <Link style={{textDecoration: 'underline'}} to="/login/dashboard" >Pagina inicial</Link>
        </div>
    )
}

export default Members