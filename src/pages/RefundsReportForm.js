import { useContext } from "react"
import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import useForm from "../Hooks/useForm"
import { UserContext } from "../UserContext"

const RefundsReportForm = () =>{
    const {listRefunds} = useContext(UserContext)
    const startDate = useForm()
    const endDate = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(startDate.validate() && endDate.validate() ){
            const refundsReportData = {
                startDate: startDate.value, 
                endDate: endDate.value, 
                
            }
                  
            await listRefunds(refundsReportData)
         
           
        }
    }

    return (
        <div>
            <h2>Formulário de Busca de Reembolsos</h2>
            <Input label="Data Inicial:" type="date" {...startDate}/>
            <Input label="Data Final:" type="date"{...endDate}/>
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default RefundsReportForm