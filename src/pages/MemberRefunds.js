import React, { useContext, } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import { Button } from "@mui/material"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

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
                                    <td>{parseFloat(refunds.refundAmmount).toFixed(2)}MT</td>
                                    <td>{parseFloat(refunds.interestPay).toFixed(2)}MT</td>
                                    <td>{new Intl.DateTimeFormat('PT-br').format(new Date(refunds.refundDate))}</td>
                                    <td style={{display: 'flex', marginTop: -6}}>
                                    <Button style={{
                                        color:'#a2a2a2', 
                                        height: 20, 
                                        alignSelf: 'center',
                                        marginRight: 3
                                    }}><EditIcon/></Button>
                                         <Button style={{color:'#828282', height: 20, alignSelf: 'center'}}><DeleteForeverIcon/></Button>
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