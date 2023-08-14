import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"



const Members = () =>{
   const { membersData, selectMember } = useContext(UserContext) 
   
    return (
        <div className="container" style={{backgroundColor: '#eee', display: 'flex', marginBottom: '40px', padding: '10px'}}> 
            <div>

                <h2 style={{marginBottom: '30px'}}>Lista dos Membros</h2>
                { membersData && membersData.map(member => (
                    <div>
                        <p style={{marginBottom: '10px', backgroundColor: '#eee'}}>
                            Nome:<Button onClick={() =>selectMember(member.id)} style={{fontWeight: 'bold'}}>{` ${member.name }`}</Button>
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
            <div>
             
            </div>
        </div>
    )
}

export default Members