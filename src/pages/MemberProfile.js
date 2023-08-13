import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Button, Input } from "@mui/material"
import styles from "../pages/MemberProfile.module.css"
import useForm from "../Hooks/useForm"

const MemberProfile = () =>{
    const { savingsRecord, memberData} = useContext(UserContext)
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
            console.log(memberData)
            const savingsData = {
                savings: savingsDate.value, 
                savingsAmmount: savingsAmmount.value, 
                sFund: sFund.value, 
                member_id: memberData.id}
                  
            savingsRecord(savingsData)    
        }
    }

        return(
            <div className="container" style={{display: 'flex'}}>
               <div className={styles.profile}>
                <h2>Perfil do Membro</h2>
                
                <h3>Nome: {memberData.name}</h3>
                <p>Idade: {memberData.age}</p>
                <p>Herdeiro(a): {memberData.inheritant}</p>
                <p>Sexo: {memberData.sex}</p>
                <p>Data de Admissao: {memberData.admissionDate}</p>
                <p>Contacto: {memberData.contact}</p>
                <p>Endereco: {memberData.adress}</p>
                <Button>Editar</Button>
                <Button>Remover</Button>
               </div>
               <div className={styles.savings}>
                <h2>Fazer Poupanca</h2>
                <Input placeholder="Data:" type="date" {...savingsDate}/>
                <Input placeholder="Montante:" {...savingsAmmount}/>
                <Input placeholder="Fundo Social:" {...sFund}/>
                <Button onClick={handdleSubmit}>Submeter</Button>
               </div>
            </div>
        )
}

export default MemberProfile