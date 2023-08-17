import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import { Button, Input, } from "@mui/material"
import styles from "../pages/MemberProfile.module.css"
import useForm from "../Hooks/useForm"
import MemberHistory from "./MemberHistory"

const MemberProfile = () =>{
    const Navigate =useNavigate()
    const { savingsRecord, memberData, confirm, memberDelete, data, selectMember} = useContext(UserContext)
    const savingsDate = useForm()
    const savingsAmmount = useForm()
    const sFund = useForm()
   
    
    const handdleSubmit = async (e) =>{
        e.preventDefault()
   
        if(
            savingsDate.validate() &&
            savingsAmmount.validate() &&
            sFund.validate()             
            ){
            const savingsData = {
                savingsDate: savingsDate.value, 
                savingsAmmount: savingsAmmount.value, 
                sFund: sFund.value, 
                member_id: memberData.id}
                  
            savingsRecord(savingsData)
            selectMember(memberData.id  )

        }
    }

    const handdleDelete = () =>{
        window.confirm("Deseja deletar este membro?")
        memberDelete(memberData.id)
        Navigate("/login/members")
        alert("membro deletado com sucesso!")
    }

    const handdleMembers = () =>{
        Navigate("/login/members")
    }

        return(
            <div>

                <div className="container" style={{display: 'flex'}}>
                <div className={styles.profile}>
                    <h2 className={styles.title}>Perfil do Membro</h2>
                    
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
                <form className={styles.savings} >
                    {confirm && <p>{confirm}</p>}
                    <h2 className={styles.title}>Fazer Poupanca</h2>
                    <Input placeholder="Data:" type="date" {...savingsDate}/>
                    <Input placeholder="Montante:" {...savingsAmmount}/>
                    <Input placeholder="Fundo Social:" {...sFund}/>
                    <input type="file" />
                    <Button onClick={handdleSubmit}>Submeter</Button>
                </form>
                </div>
                <MemberHistory/>
            </div>
        )
}

export default MemberProfile