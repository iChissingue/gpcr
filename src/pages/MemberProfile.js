import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberIdentityNav from "./MemberIdentityNav"
import MemberStateResume from "./MemberStateResume"
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CallIcon from '@mui/icons-material/Call'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'

const MemberProfile = () =>{
    const { memberData, membersData, selectMember, data,} = useContext(UserContext)
    const [menuOpen, setMenuOpen] = useState(false)
  
    const handleToggleMenu = () =>{
      setMenuOpen(!menuOpen)
    }

        return(
            <div className={styles.memberProfile}>
                <Box>
                    <Toolbar>
                        <IconButton 
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            onClick={() => handleToggleMenu()}>
                            
                            <Drawer  open={menuOpen} onClose={() => handleToggleMenu()}>
                            <List style={{marginLeft: 20}}>
                            
                                <h3 className={styles.title}>Lista dos Membros</h3>
                                { 
                                    membersData && membersData.map((member, i) =>  (                         

                                    <div key={i} className={styles.card}>
                                        <ListItemText><Grid3x3Icon style={{marginBottom: -5}}/>: {member.id}</ListItemText>
                                        <PermIdentityIcon style={{marginBottom: -5}}/>:
                                        <ListItemButton style={{marginLeft: -15, display: 'inline', fontWeight: 'bold', color: '#1976D2'}} onClick={() =>selectMember(member.id)}>
                                            {` ${member.name }`}
                                        </ListItemButton>
                                        <ListItemText>
                                            <CallIcon style={{marginBottom: -5}}/>:<i >{` ${member.contact}`}</i>
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