import { Button, Input } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"

const Refund = () =>{
    const Navigate =useNavigate()
    const { savingsRecord, memberData, confirm, memberDelete, data, selectMember} = useContext(UserContext)
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
                  
            savingsRecord(refundData)
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