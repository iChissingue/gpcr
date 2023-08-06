import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Components/Header.module.css'

const Header = () =>{

    return (
        <header className={styles.header}>
            <nav className='container'>
                <Link to="/">Pfuneka</Link>
                <div>
                  <Link to="/login">Login</Link>
                </div>
                
            </nav>
        </header>
    )
}

export default Header