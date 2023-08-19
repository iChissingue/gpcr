import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import { useContext } from "react"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"

const Refund = () =>{
    const { memberData, confirm, selectMember} = useContext(UserContext)
    const refundDate = useForm()
    const refundAmmount = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(refundDate.validate() && refundAmmount.validate()){
            const refundData = {
                refundDate: refundDate.value, 
                refundAmmount: refundAmmount.value,  
                member_id: memberData.id
            }
                  
            selectMember(memberData.id)
        }
    }
    return (
        <div>
            {confirm && <p>{confirm}</p>}
            <h2 className={styles.title}>Fazer Reembolso</h2>
            <Input placeholder="Data:" type="date" {...refundDate}/>
            <Input placeholder="Montante:" {...refundAmmount}/>
            
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default Refund