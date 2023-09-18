import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberIdentityNav from "./MemberIdentityNav"
import MemberStateResume from "./MemberStateResume"
import { useNavigate } from "react-router-dom"
import { Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

const MemberProfile = () =>{
    const { memberData, membersData, selectMember, data,} = useContext(UserContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    
  
    const handleToggleMenu = () =>{
      setMenuOpen(!menuOpen)
    }

    const handleHomeClick = () =>{
        navigate('/login/dashboard')
        handleToggleMenu()
      }
  
        return(
            <div className={styles.memberProfile}>
                <Box>
                    <Toolbar>
                        <IconButton 
                            style={{bgcolor: 'primary'}}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => handleToggleMenu()}>
                            
                            <Drawer  open={menuOpen} onClose={() => handleToggleMenu()}>
                            <List style={{marginLeft: 20}}>
                            
                                <h3 className={styles.title}>Lista dos Membros</h3>
                                { 
                                    membersData && membersData.map((member, i) =>  (                         

                                    <div key={i} className={styles.card}>
                                        <ListItemText>Codigo: {member.id}</ListItemText>
                                        Nome:
                                        <ListItemButton style={{marginLeft: -15, display: 'inline', fontWeight: 'bold', color: '#1976D2'}} onClick={() =>selectMember(member.id)}>
                                            {` ${member.name }`}
                                        </ListItemButton>
                                        <ListItemText>
                                            Contacto:<i >{` ${member.contact}`}</i>
                                        </ListItemText>
                                                
                                        
                                        
                                        <hr/> 
                                    </div>
                                ))}
                            </List>
                            </Drawer> 
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </Box> 
                <div className={styles.subMenu}>               
                    <div className={styles.profile}>
                        <b style={{color: '#1976D2'}}>{memberData.name}</b>
                        <hr/>
                        <MemberIdentityNav/>
                    </div>
                    <div className={styles.savings} >
                        <MemberStateResume {...data}/>     
                    </div>
                </div>
            </div>
        )
}

export default MemberProfile