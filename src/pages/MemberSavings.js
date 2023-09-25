import React, { useContext, } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberSavings.module.css"
import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import { Button, } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'



const MemberSavings = () =>{
    const { memberSavings, memberData} = useContext(UserContext)
    const Savings = MemberSavingsHook()
    const { totalSavings, totalSfund } = Savings
    
    


    return (
        <section className="container" style={{marginTop: 20}}>
            <h2 title="Total de poupancas do membro">Lista de Poupancas</h2>
            <div className={styles.savingsList}>
            {memberSavings?
            <table>
            <thead>
                <tr >
                <th >Poupança</th>
                <th >F. Social</th>
                <th >Data</th>
                <th >Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    memberSavings && memberSavings.map((savings, i) => (
                        <tr key={i}>
                            <td width={30}>{parseFloat(savings.savingsAmmount).toFixed(2)}MT</td>  
                            <td >{parseFloat(savings.sFund).toFixed(2)}MT</td>
                            <td >{new Intl.DateTimeFormat('PT-br').format(new Date(savings.savingsDate))}</td>
                            <td style={{display: 'flex', marginTop: -6}}>
                                <Button title="Editar" style={{
                                    
                                    color:'#a2a2a2', 
                                    height: 20, 
                                    alignSelf: 'center',
                                    marginRight: 3
                                    }}><EditIcon/></Button>
                                <Button title="Apagar" style={{color:'#828282', height: 20, alignSelf: 'center'}}><DeleteForeverIcon/></Button>
                            </td>
                        </tr>
                        ))
                }
            </tbody>
            </table>
                        : <p style={{marginTop: 20, padding: 10}}>
                            O(A) Sr(a) {memberData.name} ainda nao efetuou nenhuma poupanca!
                          </p>
  

            }   
            </div>

            <hr/>
            <p style={{marginTop: 10}}>Total de poupanca: <b>{totalSavings? parseFloat(totalSavings).toFixed(2) : 0.00}MT</b> </p>
            <p style={{marginTop: 10}}>Total de Fundo Social: <b>{totalSfund? parseFloat(totalSfund).toFixed(2) : 0.00}MT</b> </p>
        </section>
    )

}

export default MemberSavings