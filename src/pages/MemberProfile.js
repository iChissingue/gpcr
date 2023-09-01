import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberIdentityNav from "./MemberIdentityNav"
import MemberStateResume from "./MemberStateResume"
import { useNavigate } from "react-router-dom"
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

const MemberProfile = () =>{
    const { memberData,data,} = useContext(UserContext)
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
                                <List>
                                <ListItemButton onClick={() => handleHomeClick()}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                                </List>
                            </Drawer> 
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </Box> 
                <div className={styles.subMenu}>               
                    <div className={styles.profile}>
                        <b>{memberData.name}</b>
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