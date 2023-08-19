import React, { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"

const MemberSavings = () =>{
    const { memberSavings, memberData} = useContext(UserContext)
        
        const savi = memberSavings && memberSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
        const total = savi && savi.reduce((acc, curr) => acc + curr, 0)
           
        const sFund = memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
        const totalSF = sFund && sFund.reduce((acc, curr) => acc += curr, 0)       

    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Poupancas</h2>
            <div className={styles.savingsList}>
                {
                    memberSavings? memberSavings.map((savings, i) => (
                    <p key={i} style={{marginTop: 5}}>{`${savings.savingsAmmount},00MT - ${savings.sFund},00MT - ${savings.savingsDate}`}</p>  
                    ))
                    : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhuma poupanca!</p>
                }
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de poupanca: <b>{total},00MT</b> </p>
            <p style={{marginTop: 10}}>Total de Fundo Social: <b>{totalSF},00MT</b> </p>
        </section>
    )

}

export default MemberSavings