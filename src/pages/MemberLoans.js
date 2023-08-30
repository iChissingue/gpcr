import React, { useContext} from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"

const MemberLoans = () =>{
    const { memberLoans, memberData} = useContext(UserContext)
    const Loan = MemberSavingsHook()
    const { totalLoans } = Loan
        
              
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
            <p style={{marginTop: 10}}>Total de Credito: <b>{totalLoans},00MT</b> </p>
        </section>
    )

}

export default MemberLoans