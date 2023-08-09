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
                <div>
                    { data ? 
                    (
                        <Link to="/login">
                            Entrou no sitema como {data.name}
                            <button onClick={logOut}>Sair</button>
                        </Link>
                    ) 
                    : (<Link to="/login"> Login</Link>)}
                </div>
                
            </nav>
        </header>
    )
}

export default Header