import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import styles from "./MemberProfile.module.css"

const MemberStateResume = (data) =>{
    const {totalSavings, totalSfund, totalLoans, totalRefunds, refundIsValid} = MemberSavingsHook()


    const currentLoans = totalLoans - totalRefunds
    return (
        <div className={styles.resume}>
            {refundIsValid}
           <h3 className={styles.title}>RESUMO DE ACTIVIDADE</h3>
           <p>Comulativo da poupanca: { totalSavings? totalSavings : 0 }MT</p>
           <p>Comulativo de Fundo Social: { totalSfund? totalSfund : 0 }MT</p>
           <p>Comulativo de Crédito: { totalLoans? totalLoans : 0 }MT</p>
           <p>Crédito Reembolsado: { totalRefunds? totalRefunds : 0 }MT</p>
           <p>Saldo actual de Crédito: { currentLoans? currentLoans: 0 }MT</p>
           <hr/>
           <p>Montante provavel de receber: 5600,00MT</p>
        </div>
    )
}

export default MemberStateResume