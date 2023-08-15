import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import styles from "../pages/Members.module.css"



const Members = () =>{
   const { membersData, memberData, selectMember } = useContext(UserContext) 
  

   
   
    return (
        <div className={styles.membersPage} > 
            <div >
                
                <h2 className={styles.title}>Lista dos Membros</h2>
                <div className={styles.members}>
                    { membersData && membersData.map(member =>  ( 
                        

                        <div className={styles.card}>
                            <p className={styles.memberDetail}>Codigo: {member.id}</p>
                            <p className={styles.memberDetail} >
                                Nome:<Button onClick={() =>selectMember(member.id)} style={{fontWeight: 'bold'}}>{` ${member.name }`}</Button>
                            </p> 
                            Data de Admissao:<i className={styles.memberDetail} >
                                    {` ${member.admissionDate}`}
                            </i> 
                            <hr/> 
                        </div>
                    ))}
                </div>
                <Link style={{textDecoration: 'underline', marginRight: '30px'}} to="/members/add" >Adicionar Membro</Link>
                <Link style={{textDecoration: 'underline'}} to="/login/dashboard" >Pagina inicial</Link>
            </div>
            
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
                
            </div>
        </div>
    )
}

export default Members