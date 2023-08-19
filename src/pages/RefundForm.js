import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import { useContext } from "react"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"
import { Navigate } from "react-router-dom"

const Refund = () =>{
    const { refundRecord, memberData, confirm, selectMember, data} = useContext(UserContext)
    const refundDate = useForm()
    const refundAmmount = useForm()
    const interestPay = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(refundDate.validate() && refundAmmount.validate()){
            const refundData = {
                refundDate: refundDate.value, 
                refundAmmount: refundAmmount.value,  
                member_id: memberData.id,
                interestPay: interestPay.value,
                creator: data.name
            }
             await refundRecord(refundData)     
             await selectMember(memberData.id)
             Navigate("/members/memberprofile/memberrefunds")
        }
    }
    return (
        <div>
            {confirm && <p>{confirm}</p>}
            <h2 className={styles.title}>Fazer Reembolso</h2>
            <Input label="Data:" type="date" {...refundDate}/>
            <Input label="Montante:" {...refundAmmount}/>
            <Input label="Cobranca de 12%:" {...interestPay}/>
            
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default Refund