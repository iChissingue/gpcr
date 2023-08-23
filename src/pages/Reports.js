import { useContext } from "react"
import { UserContext } from "../UserContext"
import ReportNav from "./ReportNav"
import styles from "../pages/Reports.module.css"

const Reports = () =>{
        const { savingsReportData  } = useContext(UserContext)


    return (
        <div className="container" style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>               
                <div>
                <ReportNav/>
                
                </div>
            </div>
            <div className={styles.results}>   
                <h1>Poupancas efetuadas de {} a {}</h1> 
                {savingsReportData && savingsReportData.map((savings, i) =>(
                    <p key={i}>{savings.savingsAmmount},00MT  - {savings.sFund},00MT - {new Intl.DateTimeFormat('PT-br').format(new Date(savings.savingsDate))}</p>
                ))}            
            </div>
        </div>
    )
}

export default Reports