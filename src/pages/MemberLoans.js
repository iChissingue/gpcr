import React, { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings"

const MemberLoans = () =>{
    const { memberLoans, memberData} = useContext(UserContext)
        
        const loan = memberLoans && memberLoans.map(res =>(JSON.parse(res.loanAmmount))) 
        const total = loan && loan.reduce((acc, curr) => acc + curr, 0)
           
        // const sFund =   memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
        // const totalSF = sFund && sFund.reduce((acc, curr) => acc += curr, 0)       

    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Emprestimos</h2>
            <div className={styles.savingsList}>
                {
                    memberLoans? memberLoans.map((loan, i) => (
                    <p key={i} style={{marginTop: 5}}>
                        {
                        `${loan.loanAmmount},00MT - 
                        ${new Intl.DateTimeFormat('PT-br').format(new Date(loan.loanDate))} -
                        ${new Intl.DateTimeFormat('PT-br').format(new Date(loan.refundWaitingDate))}`
                        }</p>  
                    ))
                    : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhum emprestimo!</p>
                }
            </div>
            <hr/>
            <p style={{marginTop: 10}}>Total de Credito: <b>{total},00MT</b> </p>
        </section>
    )

}

export default MemberLoans