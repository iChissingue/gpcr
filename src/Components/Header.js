import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    IconButton,
    ListItemButton
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import  HomeIcon from '@mui/icons-material/Home'
import  GroupsIcon from '@mui/icons-material/Groups'
import { useNavigate } from 'react-router-dom'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import HelpIcon from '@mui/icons-material/Help'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import styles from "./Header.module.css"


const Header = () =>{
    const { login, data, logOut } = useContext(UserContext)
      const [menuOpen, setMenuOpen] = useState(false)
      const navigate = useNavigate()
      
    
      const handleToggleMenu = () =>{
        setMenuOpen(!menuOpen)
      }
    
      const handleMemberClick = () =>{
        navigate('/login/members')
        handleToggleMenu()
      }
    
      const handleHomeClick = () =>{
        navigate('/login/dashboard')
        handleToggleMenu()
      }
      
      const handleReportsClick = () =>{
        navigate('/login/reports')
        handleToggleMenu()
      }

      const handleAdminClick = () =>{
        if(data.userCategory_id ===1){
            navigate('/login/admin')
            handleToggleMenu()
        }else{
            alert(`Entrada reservada para o pessoal autorizado!`)
            handleToggleMenu()
        }
      }

      const handleHelpClick = () =>{
        navigate('/login/helppage')
        handleToggleMenu()
      }

      const handleLogOutClick = () =>{
        logOut()
        handleToggleMenu()
      }
      const handleLogInClick = () =>{
        navigate('/login')
        
      }
    
      return (
        <div className={styles.header}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
                {login &&
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => handleToggleMenu()}
              >
              <MenuIcon />
              </IconButton>
                }
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                Pfuneka
              </Typography>
              <Typography style={{marginLeft: '10px', display: 'flex', flexDirection: 'raw'}}>
                    PCR - Poupança e Crédito Rotativo | 
                     { data ? 
                    (
                        <span style={{marginLeft: '10px', display: 'flex', flexDirection: 'raw'}}>
                            <b style={{color: 'black'}}>{data.name} </b> 
                           
                            <NavLink style={{color: 'silver', marginLeft: '10px'}} ><b><AccountBoxIcon sx={{margin: 0, padding: 0}}/></b></NavLink >
                            <NavLink style={{color: 'red', marginLeft: '10px', textDecoration: 'underline'}} onClick={ logOut}><b>[ Sair ]</b></NavLink >
                        </span>
                    ) 
                    : (<button onClick={() => handleLogInClick()} color="inherit"><b>Login</b></button>)}
              </Typography>
            </Toolbar>
          </AppBar>
         <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
            <List>
              <ListItemButton onClick={() => handleHomeClick()}>
                <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={()=> handleMemberClick()}>
                <ListItemIcon><GroupsIcon color='primary'/></ListItemIcon>
                <ListItemText>Membros</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={()=> handleReportsClick()}>
                <ListItemIcon><LeaderboardIcon color='primary'/></ListItemIcon>
                <ListItemText>Relatórios</ListItemText>
              </ListItemButton>
              <hr/>
              <ListItemButton onClick={()=> handleAdminClick()}>
                <ListItemIcon><ManageAccountsIcon color='primary'/></ListItemIcon>
                <ListItemText>Administração</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={()=> handleHelpClick()}>
                <ListItemIcon><HelpIcon color='primary'/></ListItemIcon>
                <ListItemText>Ajuda</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={()=> handleLogOutClick()}>
                <ListItemIcon><PowerSettingsNewIcon color='secondary'/></ListItemIcon>
                <ListItemText>Sair</ListItemText>
              </ListItemButton>
            </List>
          </Drawer> 
        </Box> 
        </div>
      )
}

export default Header