import { useContext } from "react"
import { UserContext } from "../UserContext"


const Members = () =>{
   const { membersData } = useContext(UserContext) 
   
    return (
        <div className="container"> 
            <h2>Lista dos Membros</h2>
            { membersData && membersData.map(member => (
               <p style={{marginBottom: '10px'}}>
                    {`
                        Nome: ${member.name} | 
                        Data de Admissao: ${member.admissionDate}
                    `}
               </p>  
              

            ))}
        </div>
    )
}

export default Members