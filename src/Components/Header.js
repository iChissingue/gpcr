import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Components/Header.module.css'
import { UserContext } from '../UserContext'

const Header = () =>{

    const { data, logOut } = useContext(UserContext)
    
    return (
        <header className={styles.header}>
            <nav className='container'>
                <Link to="/">Pfuneka</Link>
                <div className={styles.navigators}>
                    { data ? 
                    (
                        <Link style={{ display: 'flex', flexDirection: 'raw'}} to="/login">
                            {data.username}
                           
                            <p style={{color: 'red', marginLeft: '10px', textDecoration: 'underline'}} onClick={logOut}>[ Sair ]</p >
                        </Link>
                    ) 
                    : (<Link to="/login"> Login</Link>)}
                </div>
                
            </nav>
        </header>
    )
}

export default Header