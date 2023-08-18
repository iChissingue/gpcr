import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"

const Loan = () =>{
    const Navigate =useNavigate()
    const { savingsRecord, memberData, confirm, memberDelete, data, selectMember} = useContext(UserContext)
    const loanDate = useForm()
    const loanAmmount = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(loanDate.validate() && loanAmmount.validate()){
            const loanData = {
                loanDate: loanDate.value, 
                loanAmmount: loanAmmount.value,  
                member_id: memberData.id
            }
                  
            savingsRecord(loanData)
            selectMember(memberData.id)
        }
    }
    return (
        <div>
            {confirm && <p>{confirm}</p>}
            <h2 className={styles.title}>Fazer Emprestimo</h2>
            <Input placeholder="Data:" type="date" {...loanDate}/>
            <Input placeholder="Montante:" {...loanAmmount}/>
            
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default Loan