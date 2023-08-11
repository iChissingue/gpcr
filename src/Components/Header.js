import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Components/Header.module.css'
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

const Header = () =>{
    const { login, data, logOut } = useContext(UserContext)
      const [menuOpen, setMenuOpen] = useState(false)
      const navigate = useNavigate()
      
    
      const handleToggleMenu = () =>{
        setMenuOpen(!menuOpen)
      }
    
      const handleMemberChick = () =>{
        navigate('/login/members')
        handleToggleMenu()
      }
    
      const handleHomeChick = () =>{
        navigate('/login/dashboard')
        handleToggleMenu()
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
                           
                            <p style={{color: 'red', marginLeft: '10px', textDecoration: 'underline'}} onClick={logOut}>[ Sair ]</p >
                        </Link>
                    ) 
                    : (<Button color="inherit">Login</Button>)}
              
            </Toolbar>
          </AppBar>
         <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
            <List>
              <ListItemButton onClick={() => handleHomeChick()}>
                <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={()=> handleMemberChick()}>
                <ListItemIcon><GroupsIcon color='primary'/></ListItemIcon>
                <ListItemText>Membros</ListItemText>
              </ListItemButton>
              <hr/>
              <ListItemButton onClick={()=> handleMemberChick()}>
                <ListItemIcon><LeaderboardIcon color='primary'/></ListItemIcon>
                <ListItemText>Relatorios</ListItemText>
              </ListItemButton>
            </List>
          </Drawer> 
        </Box> 
      )
}

export default Header