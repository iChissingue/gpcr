import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"



const Members = () =>{
   const { membersData, selectMember } = useContext(UserContext) 
   
    return (
        <div className="container" style={{backgroundColor: '#eee'}}> 
            <h2 style={{marginBottom: '30px'}}>Lista dos Membros</h2>
            { membersData && membersData.map(member => (
                <div>
                    <p style={{marginBottom: '10px', backgroundColor: '#eee'}}>
                        Nome:<button onClick={() =>selectMember(member.id)} style={{fontWeight: 'bold'}}>{` ${member.name }`}</button>
                    </p> 
                    Data de Admissao:<i style={{marginBottom: '10px', color: 'blue'}}>
                            {` ${member.admissionDate}`}
                    </i> 
                    <hr/> 
                </div>
            ))}
            <Link style={{textDecoration: 'underline', marginRight: '30px'}} to="/members/add" >Adicionar Membro</Link>
            <Link style={{textDecoration: 'underline'}} to="/login/dashboard" >Pagina inicial</Link>
        </div>
    )
}

export default Members