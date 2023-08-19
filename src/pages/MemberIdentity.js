import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import { Button } from "@mui/material"

const MemberIdentity = () =>{
    const Navigate =useNavigate()
    const { memberData, memberDelete, data, selectMember} = useContext(UserContext)
  
   
    
    const handdleDelete = () =>{
        window.confirm("Deseja deletar este membro?")
        if(window.confirm){
            memberDelete(memberData.id)
            Navigate("/login/members")
            alert("membro deletado com sucesso!")
        }
    }

    const handdleMembers = () =>{
        Navigate("/login/members")
    }

    return (
        <div style={{paddingTop: 20}}>        
            <h3>Nome: {memberData.name}</h3>
            <p>Idade: {memberData.age}</p>
            <p>Herdeiro(a): {memberData.inheritant}</p>
            <p>Sexo: {memberData.sex}</p>
            <p>Data de Admissao: {memberData.admissionDate}</p>
            <p>Contacto: {memberData.contact}</p>
            <p>Endereco: {memberData.adress}</p>
            <Button>Editar</Button>
            {data.userCategory_id ===1 &&<Button onClick={handdleDelete}>Remover</Button>}
            <Button onClick={handdleMembers}>Membros</Button>
        </div>
    )

}

export default MemberIdentity