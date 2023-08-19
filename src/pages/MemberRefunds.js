import React, { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"

const MemberSavings = () =>{
    const { memberRefunds, memberData} = useContext(UserContext)
        
        const refund = memberRefunds && memberRefunds.map(res =>(JSON.parse(res.refundAmmount))) 
        const total = refund && refund.reduce((acc, curr) => acc + curr, 0)
           
        // const sFund = memberRefunds && memberRefunds.map(res =>(JSON.parse(res.sFund)))
        // const totalSF = sFund && sFund.reduce((acc, curr) => acc += curr, 0)       

    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Reembolsos</h2>
            <div className={styles.savingsList}>
                {
                    memberRefunds? memberRefunds.map((refunds, i) => (
                    <p key={i} style={{marginTop: 5}}>{`${refunds.refundAmmount},00MT  - ${refunds.refundDate}`}</p>  
                    ))
                    : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhum Reembolso!</p>
                }
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de poupanca: <b>{total},00MT</b> </p>
          
        </section>
    )

}

export default MemberSavings