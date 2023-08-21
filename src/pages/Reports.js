import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import SavingsReportForm from "./SavingsReportForm"

const Reports = () =>{
        const { savingsReport  } = useContext(UserContext)


    return (
        <div className="container"style={{display: 'flex', flexDirection: 'column'}}>
            <h3>Lista de Relatorio</h3>
            <ol>
                <li>
                    <Link to >Lista de Membros que Pouparam durante um Periodo</Link> 
                </li>
                <li>
                    <Link to>Lista de Membros que Receberam Credito durante um Periodo</Link>
                </li>
                <li>
                    <Link to>Lista de Membros que fizeram Reembolso durante um Periodo</Link>
                </li>
                <li>
                    <Link to>Resumo geral de Poupancas</Link>
                </li>
                <li>
                    <Link to>Resumo geral de Emprestiomos</Link>
                </li>
            </ol>
            <div>
                <SavingsReportForm/>
            </div>
        </div>
    )
}

export default Reports