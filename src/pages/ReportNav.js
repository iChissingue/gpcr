import { NavLink, Route, Routes } from "react-router-dom"
import styles from "./MemberProfile.module.css"
import SavingsReportForm from "./SavingsReportForm"
import LoansReportForm from "./LoansReportForm"
import RefundsReportForm from "./RefundsReportForm"



const ReportNav = () =>{
    return (
        <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>Lista de Relatorio</h3>
                    <nav className={styles.buttons}>
                    <ol>
                        <li>
                            <NavLink to="/login/reports/savingsreportform">
                                Lista de Poupancas de um Periodo
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/login/reports/loansreportform">
                            Lista de Credito concedido durante um Periodo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login/reports/refundsreportform">
                            Lista de Reembolsos efetuados durante um Periodo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Report/savingsresume">
                            Resumo geral de Poupancas
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/Report/generalsavingsresume">
                            Resumo geral de Emprestimos
                        </NavLink>
                        </li>
                    </ol> 
                    </nav>
                </div>
                
            <div>
            <Routes>
                <Route path="/savingsreportform" element={<SavingsReportForm/>}/>
                <Route path="/loansreportform" element={<LoansReportForm/>}/>
                <Route path="/refundsreportform" element={<RefundsReportForm/>}/>
                <Route path="/savingsreportform" element={<SavingsReportForm/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default ReportNav