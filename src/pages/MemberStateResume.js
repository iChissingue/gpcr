import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import styles from "./MemberProfile.module.css"

const MemberStateResume = (data) =>{
    const totals = MemberSavingsHook()
    const { totalSavings, totalSfund } = totals 
    const Loan = MemberSavingsHook()
    const { totalLoans } = Loan
    console.log(totals.total)
    return (
        <div className={styles.resume}>

           <p>Comulativo da poupanca: {totalSavings? `${totalSavings}` : 0},00MT</p>
           <p>Comulativo de Fundo Social: {totalSfund? `${totalSfund}` : 0},00MT</p>
           <p>Credito em divida: {totalLoans? `${totalLoans}` : 0},00MT</p>
           <p>Credito Reembolsado: 200,00MT</p>
           <hr/>
           <p>Montante provavel de receber: 5600,00MT</p>
        </div>
    )
}

export default MemberStateResume