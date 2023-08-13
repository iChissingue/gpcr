import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
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
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CloseIcon from '@mui/icons-material/Close';

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
              
                     { data ? 
                    (
                        <Link style={{ display: 'flex', flexDirection: 'raw'}} to="/login">
                            {data.username}
                           
                            <b style={{color: '#ff2e1b', marginLeft: '10px', textDecoration: 'underline'}} onClick={logOut}>[ Sair ]</b >
                        </Link>
                    ) 
                    : (<Button onClick={() => handleLogInClick()} color="inherit">Login</Button>)}
              
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
                <ListItemText>Relatorios</ListItemText>
              </ListItemButton>
              <hr/>
              <ListItemButton onClick={()=> handleAdminClick()}>
                <ListItemIcon><ManageAccountsIcon color='primary'/></ListItemIcon>
                <ListItemText>Administracao</ListItemText>
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
      )
}

export default Header