import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"
import { Button, ListItemText } from "@mui/material"
import styles from "../pages/Members.module.css"
import CallIcon from '@mui/icons-material/Call'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'



const Members = () =>{
   const { membersData, data, selectMember } = useContext(UserContext) 

    return (
        <div className={styles.membersPage} > 
            <div className="container">
                
                <h2 className={styles.title}>Lista dos Membros</h2>
                <div className={styles.members}>
                    { 
                        membersData && membersData.map((member, i) =>  (                         

                        <div key={i} className={styles.card}>
                            <p className={styles.memberDetail}><Grid3x3Icon style={{marginBottom: -5}}/>: {member.id}</p>
                            <p className={styles.memberDetail} >
                            <PermIdentityIcon style={{marginBottom: -5}}/>:<Button onClick={() =>selectMember(member.id)} style={{fontWeight: 'bold'}}>{` ${member.name }`}</Button>
                            </p> 
                            <CallIcon style={{marginBottom: -5}}/>:<i className={styles.memberDetail} >
                                    {` ${member.contact}`}
                            </i> 
                            <hr style={{marginBottom: -8}}/> 
                        </div>
                    ))}
                </div>
                {data.userCategory_id ===1 && <Link style={{textDecoration: 'underline', marginRight: '30px'}} to="/members/add" >Adicionar Membro</Link>}
                <Link style={{textDecoration: 'underline'}} to="/login/dashboard" >Pagina inicial</Link>
            </div>
            <div>
             
            </div>
            
        </div>
    )
}

export default Members