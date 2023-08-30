import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"

const MemberSavingsHook = () =>{
    const { memberSavings, memberLoans} = useContext(UserContext)
    const [totalSavings, setTotalSavings] = useState()
    const [totalLoans, setTotalLoans] = useState()
    const [totalSfund, setTotalSfund] = useState()

    const savi = memberSavings && memberSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
    const sFund = memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
    const loan = memberLoans && memberLoans.map(res =>(JSON.parse(res.loanAmmount))) 
    
    useEffect(() =>{
        const total = savi && savi.reduce((acc, curr) => acc + curr, 0)
        const totalSF = sFund && sFund.reduce((acc, curr) => acc + curr, 0) 
        const totalLoans = loan && loan.reduce((acc, curr) => acc + curr, 0)
        setTotalSavings(total)
        setTotalLoans(totalLoans)
        setTotalSfund(totalSF)
        
    }, [savi, sFund, loan])
    
    return {
        totalSavings: totalSavings,
        totalLoans: totalLoans,
        totalSfund
    }
}

export default MemberSavingsHook