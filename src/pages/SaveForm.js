import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import useForm from "../Hooks/useForm"
import styles from "../pages/MemberProfile.module.css"


const Save = () =>{
    const Navigate = useNavigate()
    const { savingsRecord, memberData, data, selectMember} = useContext(UserContext)
    const savingsDate = useForm()
    const savingsAmmount = useForm()
    const sFund = useForm()


    const handdleSubmit = async (e) =>{
        e.preventDefault()
        if(savingsDate.validate() && savingsAmmount.validate() && sFund.validate()){
            const savingsData = {
                savingsDate: savingsDate.value, 
                savingsAmmount: savingsAmmount.value, 
                sFund: sFund.value, 
                member_id: memberData.id,
                creator: data.name
            }
                  
            await savingsRecord(savingsData)
            await selectMember(memberData.id)
            Navigate("/members/memberprofile/membersavings")
        }
    }
    return (
        <div>
            
            <h2 className={styles.title}>Fazer Poupanca</h2>
            <Input label={"Data:"} type="date" {...savingsDate}/>
            <Input label="Montante:" {...savingsAmmount}/>
            <Input label="Fundo Social:" {...sFund}/>
            <input type="file" />
            <Button onClick={handdleSubmit}>Submeter</Button>
        </div>
    )
}

export default Save