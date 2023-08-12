import { useContext } from "react"
import { UserContext } from "../UserContext"

const MemberProfile = () =>{
    const {memberData} = useContext(UserContext)

        return(
            <div className="container">
               <h2>Perfil do Membro</h2>
               
               <h3>Nome: {memberData.name}</h3>
               <p>Idade: {memberData.age}</p>
               <p>Herdeiro(a): {memberData.inheritant}</p>
               <p>Sexo: {memberData.sex}</p>
               <p>Data de Admissao: {memberData.admissionDate}</p>
               <p>Contacto: {memberData.contact}</p>
               <p>Endereco: {memberData.adress_id}</p>
            </div>
        )
}

export default MemberProfile