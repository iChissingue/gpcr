import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import styles from "./MemberProfile.module.css"

const MemberStateResume = (data) =>{
    const {
        totalSavings, 
        totalSfund, 
        totalLoans, 
        totalRefunds, 
        refundIsValid, 
        groupSavings, 
        groupInterestPay} = MemberSavingsHook()
  

    const currentLoans = totalLoans - totalRefunds
    const memberSavingsPortion = ((totalSavings-currentLoans)*100)/groupSavings
    const addInterest = (groupInterestPay*memberSavingsPortion)/100

    return (
        <div className={styles.resume}> 
           <h3 className={styles.title}>RESUMO DE ACTIVIDADE</h3>
           <table>
                <tbody>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Comulativo da poupanca:</td>
                        <td style={{textAlign: 'right'}}>{ totalSavings? parseFloat(totalSavings).toFixed(2) : 0.00 }MT</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Comulativo de Fundo Social:</td>
                        <td style={{textAlign: 'right'}}>{ totalSfund? parseFloat(totalSfund).toFixed(2) : 0.00 }MT</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Comulativo de Crédito:</td>
                        <td style={{textAlign: 'right'}}>{ totalLoans? parseFloat(totalLoans).toFixed(2) : 0.00 }MT</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Crédito Reembolsado:</td>
                        <td style={{textAlign: 'right'}}>{ totalRefunds? parseFloat(totalRefunds).toFixed(2) : 0.00 }MT</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Saldo actual de Crédito:</td>
                        <td style={{textAlign: 'right'}}>{ currentLoans >0? parseFloat(currentLoans).toFixed(2): 0.00 }MT</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left', height: 25}}>Juros:</td>
                        <td style={{textAlign: 'right'}}>{ currentLoans > 0? parseFloat(((currentLoans*12)/100).toFixed(2)): 0.00 }MT</td>
                    </tr>
                    <tr><td colSpan={2}>   <hr /> </td></tr>
                    <tr >
                        <td style={{textAlign: 'left', height: 25}}>Montante provavel de receber:</td>
                        <td style={{textAlign: 'right'}}><b>{ parseFloat(totalSavings-currentLoans + addInterest).toFixed(2) }MT</b></td>
                    </tr>
                </tbody>
            </table>
            <p style={{color: 'orange'}}>
                {!refundIsValid && `Este membro reembolsou ${currentLoans*(-1)}MT, acima do que devia, entretanto foi adicionado a poupanca!`}</p>
        </div>
    )
}

export default MemberStateResume