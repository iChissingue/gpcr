import { useContext, useState } from "react"
import { UserContext } from "../UserContext"

const MemberSavingsHook = () =>{
    const { memberSavings} = useContext(UserContext)
    const [totalSavings, setTotalSavings] = useState()

    const savi = memberSavings && memberSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
        const total = savi && savi.reduce((acc, curr) => acc + curr, 0)
        setTotalSavings(total)
        console.log(totalSavings)   
        const sFund = memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
        const totalSF = sFund && sFund.reduce((acc, curr) => acc += curr, 0)    
    return {
        total: totalSavings,
        totalSF: totalSF

    }
}

export default MemberSavingsHook