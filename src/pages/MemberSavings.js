import React, { useContext, } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"


const MemberSavings = () =>{
    const { memberSavings, memberData} = useContext(UserContext)
    const Savings = MemberSavingsHook()
    const { totalSavings, totalSfund } = Savings
    
    console.log(new Intl.DateTimeFormat('PT-br').format(new Date(new Date().setDate(new Date().getDate() + 28))))


    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Poupancas</h2>
            <div className={styles.savingsList}>
                {
                    memberSavings? memberSavings.map((savings, i) => (
                    <p key={i} style={{marginTop: 5}}>{`${savings.savingsAmmount},00MT - ${savings.sFund},00MT - ${new Intl.DateTimeFormat('PT-br').format(new Date(savings.savingsDate))}`}</p>  
                    ))
                    : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhuma poupanca!</p>
                }
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de poupanca: <b>{totalSavings? totalSavings : 0},00MT</b> </p>
            <p style={{marginTop: 10}}>Total de Fundo Social: <b>{totalSfund? totalSfund : 0},00MT</b> </p>
        </section>
    )

}

export default MemberSavings