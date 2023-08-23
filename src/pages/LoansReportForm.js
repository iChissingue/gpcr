import { useContext } from "react"
import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import useForm from "../Hooks/useForm"
import { UserContext } from "../UserContext"

const LoansReportForm = () =>{
    const {listLoans} = useContext(UserContext)
    const startDate = useForm()
    const endDate = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(startDate.validate() && endDate.validate() ){
            const loansReportData = {
                startDate: startDate.value, 
                endDate: endDate.value, 
                
            }
                  
            await listLoans(loansReportData)
         
           
        }
    }

    return (
        <div>
            <h2>Formulário de Busca de Empréstimos</h2>
            <Input label="Data Inicial:" type="date" {...startDate}/>
            <Input label="Data Final:" type="date"{...endDate}/>
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default LoansReportForm