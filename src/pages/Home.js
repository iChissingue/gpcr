import React from 'react'
import styles from '../pages/Home.module.css'


const Home = () =>{

    return (
        <>
            <div className={styles.home}>
                <img src='/login.png'></img>   
                <h3 className={styles.details}>PFUNEKA - Grupo de Poupança e Crédito Rotativo</h3> 
            </div>
        </>
    )
}

export default Home