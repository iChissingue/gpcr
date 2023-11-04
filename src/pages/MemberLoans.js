import React, { useContext} from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import { Button } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

const MemberLoans = () =>{
    const { memberLoans, memberData} = useContext(UserContext)
    const Loan = MemberSavingsHook()
    const { totalLoans } = Loan
        
              
    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Emprestimos</h2>
            <div className={styles.savingsList}>
            { memberLoans?
                <table>
                <thead>
                    <tr >
                    <th >Valor</th>
                    <th >Data Emprestimo</th>
                    <th >Data de Reembolso</th>
                    <th >Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    memberLoans && memberLoans.map((loan, i) => (
                        <tr key={i}>
                            <td width={30}>{parseFloat(loan.loanAmmount).toFixed(2)}MT</td>  
                            <td >{new Intl.DateTimeFormat('PT-br').format(new Date(loan.loanDate))}</td>
                            <td >{new Intl.DateTimeFormat('PT-br').format(new Date(loan.refundWaitingDate))}</td>
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
                : <p style={{marginTop: 20, padding: 10}}>O(A) Sr(a) {memberData.name} ainda nao efetuou nenhum emprestimo!</p>
            }
            </div>
            <hr/>
            <p style={{marginTop: 10}}>Total de Credito: <b>{ totalLoans && parseFloat(totalLoans).toFixed(2)}0.00MT</b> </p>
        </section>
    )

}

export default MemberLoans