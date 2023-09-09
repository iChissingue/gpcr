import React, { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import { Button } from "@mui/material"

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
                            memberRefunds? memberRefunds.map((refunds, i) => (
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
                            : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhum Reembolso!</p>
                        }
                    </tbody>
                </table>
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de poupanca: <b>{total},00MT</b> </p>
          
        </section>
    )

}

export default MemberSavings