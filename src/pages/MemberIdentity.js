import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { Button } from "@mui/material"

const MemberIdentity = () =>{
    const Navigate =useNavigate()
    const { memberData, memberDelete, data, listMembers} = useContext(UserContext)
  
   
    
    const handdleDelete = () =>{
        let response = window.confirm("Deletar este membro?")
        if(response){
            memberDelete(memberData.id)
            listMembers()
            Navigate("/login/members")
           
        }
    }

    const handdleMembers = () =>{
        Navigate("/login/members")
    }

    
    return (
        <div style={{paddingTop: 20}}>        
            <table>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Nome:</td>
                    <td style={{textAlign: 'right'}}><b>{memberData.name}</b></td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Idade:</td>
                    <td style={{textAlign: 'right'}}>{memberData.age}</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Herdeiro(a):</td>
                    <td style={{textAlign: 'right'}}>{memberData.inheritant}</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Sexo:</td>
                    <td style={{textAlign: 'right'}}>{memberData.sex}</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Data de Admissão:</td>
                    <td style={{textAlign: 'right'}}>{new Intl.DateTimeFormat('PT-br').format(new Date(memberData.admissionDate))}</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Contacto:</td>
                    <td style={{textAlign: 'right'}}>{memberData.contact}</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'left', height: 25}}>Endereço:</td>
                    <td style={{textAlign: 'right'}}>{memberData.adress}</td>
                </tr>
                
            </table>
            <Button><EditIcon/></Button>
            {data.userCategory_id ===1 &&<Button onClick={handdleDelete}><DeleteForeverIcon/></Button>}
            <Button onClick={handdleMembers}>Membros</Button>
        </div>
    )
    
}

export default MemberIdentity