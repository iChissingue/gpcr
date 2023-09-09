import React, { useContext, } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import { Button } from "@mui/material"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"

const MemberSavings = () =>{
    const { memberRefunds, memberData} = useContext(UserContext)
    const Refunds = MemberSavingsHook()
    const { totalRefunds } = Refunds    

    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Reembolsos</h2>
            <div className={styles.savingsList}>
                { memberRefunds?
                <table >
                    <thead>
                        <tr>
                            <th>Capital</th> 
                            <th>Juros</th> 
                            <th>Data</th> 
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            memberRefunds && memberRefunds.map((refunds, i) => (
                                <tr key={i}>
                                    <td>{refunds.refundAmmount}MT</td>
                                    <td>{refunds.interestPay}MT</td>
                                    <td>{new Intl.DateTimeFormat('PT-br').format(new Date(refunds.refundDate))}</td>
                                    <td style={{display: 'flex', marginTop: -6}}>
                                        <Button style={{
                                            backgroundColor: '#a2a2a2', 
                                            color:'#000001', 
                                            height: 20, 
                                            alignSelf: 'center',
                                            marginRight: 3
                                            }}>Editar</Button>
                                        <Button style={{backgroundColor: '#828282', color:'#000001', height: 20, alignSelf: 'center'}}>Remover</Button>
                                    </td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </table>
                        : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhum Reembolso!</p>
                }
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de reembolsos: <b>{totalRefunds? parseFloat(totalRefunds).toFixed(2) : 0.00}MT</b> </p>
          
        </section>
    )

}

export default MemberSavings