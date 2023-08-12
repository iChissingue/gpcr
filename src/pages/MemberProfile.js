import { useContext } from "react"
import { UserContext } from "../UserContext"

const MemberProfile = () =>{
    const {memberData} = useContext(UserContext)

        return(
            <div className="container">
                <h2>Perfil do Membro</h2>
               
               <h3>Nome: {memberData.name}</h3>
               <p>Idade: {memberData.age}</p>
               <p>{ `${memberData.inheritant}`}</p>
               <p>{ `${memberData.sex}`}</p>
               <p>{ `${memberData.admissionDate}`}</p>
               <p>{ `${memberData.Contact}`}</p>
               <p>{ `${memberData.adress_id}`}</p>
            </div>
        )
}

export default MemberProfile