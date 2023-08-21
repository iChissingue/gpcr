import { useContext } from "react"
import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import useForm from "../Hooks/useForm"
import { UserContext } from "../UserContext"

const SavingsReportForm = () =>{
    const {listSavings} = useContext(UserContext)
    const startDate = useForm()
    const endDate = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(startDate.validate() && endDate.validate() ){
            const savingsReportData = {
                startDate: startDate.value, 
                endDate: endDate.value, 
                
            }
                  
            await listSavings(savingsReportData)
         
           
        }
    }

    return (
        <div>
            <Input label="Data Inicial:" type="date" {...startDate}/>
            <Input label="Data Final:" type="date"{...endDate}/>
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default SavingsReportForm