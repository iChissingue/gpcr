import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"

const Loan = () =>{
    const Navigate =useNavigate()
    const { loanRecord, memberData, confirm, data, selectMember} = useContext(UserContext)
    const loanDate = useForm()
    const date = new Date(loanDate.value)
    const loanAmmount = useForm()
    const refundWaitingDate = useForm()
    refundWaitingDate.value = loanDate.value && new Intl.DateTimeFormat('PT-br')
        .format(new Date(date.setDate(date.getDate() + 35)))
    let interestAmmount = useForm()
    interestAmmount.value = (JSON.parse(loanAmmount.value * 12)/100)

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(loanDate.validate() && loanAmmount.validate()){
            const loanData = {
                loanDate: loanDate.value, 
                loanAmmount: loanAmmount.value,
                interestAmmount: JSON.stringify(interestAmmount.value),
                member_id: memberData.id,
                creator: data.name
            }
                  
            await loanRecord(loanData)
            await selectMember(memberData.id)
            Navigate("/members/memberprofile/memberloans")
        }
    }
    return (
        <div>
            {confirm && <p>{confirm}</p>}
            <h2 className={styles.title}>Fazer Emprestimo</h2>
            <Input label="Data:" type="date" {...loanDate}/>
            <Input label="Montante:" {...loanAmmount}/>
            <Input disabled label="Juros 12%:" {...interestAmmount}/>
            
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default Loan