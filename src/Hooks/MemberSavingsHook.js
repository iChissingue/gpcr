import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"

const MemberSavingsHook = () =>{
    const { memberSavings, memberLoans, memberRefunds} = useContext(UserContext)
    const [totalSavings, setTotalSavings] = useState()
    const [totalLoans, setTotalLoans] = useState()
    const [totalSfund, setTotalSfund] = useState()
    const [totalRefunds, setTotalRefunds] = useState()
    const [refundIsValid, setRefundIsValid] = useState(true)

    const savi = memberSavings && memberSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
    const sFund = memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
    const loan = memberLoans && memberLoans.map(res =>(JSON.parse(res.loanAmmount))) 
    const refund = memberRefunds && memberRefunds.map(res =>(JSON.parse(res.refundAmmount))) 
    
    const refundValidate = (totalLoans, totalRefunds) =>{
        const currentLoans = totalLoans - totalRefunds
        if( currentLoans === 0 || currentLoans > 0){
            setRefundIsValid(true)
        }else{
            setRefundIsValid(false)
            alert(`Este reembolsou ${currentLoans}MT, acima do que devia!`)
        }
    }
    useEffect(() =>{
        const total = savi && savi.reduce((acc, curr) => acc + curr, 0)
        const totalSF = sFund && sFund.reduce((acc, curr) => acc + curr, 0) 
        const totalLoans = loan && loan.reduce((acc, curr) => acc + curr, 0)
        const totalRefunds = refund && refund.reduce((acc, curr) => acc + curr, 0)
        setTotalSavings(total)
        setTotalLoans(totalLoans)
        setTotalSfund(totalSF)
        setTotalRefunds(totalRefunds)
        refundValidate(totalLoans, totalRefunds)
        
    }, [savi, sFund, loan, refund])

    
    return {
        totalSavings: totalSavings,
        totalLoans: totalLoans,
        totalSfund,
        totalRefunds,
        refundIsValid
    }
}

export default MemberSavingsHook