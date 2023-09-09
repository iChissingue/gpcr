import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext"

const MemberSavingsHook = () =>{
    const { memberSavings, memberLoans, memberRefunds, allSavings, allRefunds} = useContext(UserContext)
    const [totalSavings, setTotalSavings] = useState()
    const [totalLoans, setTotalLoans] = useState()
    const [totalSfund, setTotalSfund] = useState()
    const [totalRefunds, setTotalRefunds] = useState()
    const [groupSavings, setGroupSavings] = useState()
    const [groupInterestPay, setGroupInterestPay] = useState()
    const [refundIsValid, setRefundIsValid] = useState(true)

    const savi = memberSavings && memberSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
    const sFund = memberSavings && memberSavings.map(res =>(JSON.parse(res.sFund)))
    const loan = memberLoans && memberLoans.map(res =>(JSON.parse(res.loanAmmount))) 
    const refund = memberRefunds && memberRefunds.map(res =>(JSON.parse(res.refundAmmount))) 
    const tSavings = allSavings && allSavings.map(res =>(JSON.parse(res.savingsAmmount))) 
    const tInterestPay = allRefunds && allRefunds.map(res =>(JSON.parse(res.interestPay))) 
    
    const refundValidate = (totalLoans, totalRefunds) =>{
        const currentLoans = totalLoans - totalRefunds
        if( currentLoans === 0 || currentLoans > 0){
            setRefundIsValid(true)
        }else{
            setRefundIsValid(false)
            return <p>Este membro reembolsou {currentLoans}MT, acima do que devia!</p>
        }
    }
    useEffect(() =>{
        const total = savi && savi.reduce((acc, curr) => acc + curr, 0)
        const totalSF = sFund && sFund.reduce((acc, curr) => acc + curr, 0) 
        const totalLoans = loan && loan.reduce((acc, curr) => acc + curr, 0)
        const totalRefunds = refund && refund.reduce((acc, curr) => acc + curr, 0)
        const groupSavings = tSavings && tSavings.reduce((acc, curr) => acc + curr, 0)
        const groupInterestPay = tInterestPay && tInterestPay.reduce((acc, curr) => acc + curr, 0)
        setTotalSavings(total)
        setTotalLoans(totalLoans)
        setTotalSfund(totalSF)
        setTotalRefunds(totalRefunds)
        setGroupSavings(groupSavings)
        setGroupInterestPay(groupInterestPay)
        refundValidate(totalLoans, totalRefunds)
        
    }, [savi, sFund, loan])

    
    return {
        totalSavings: totalSavings,
        totalLoans: totalLoans,
        totalSfund,
        totalRefunds,
        refundIsValid,
        groupSavings,
        groupInterestPay,
    }
}

export default MemberSavingsHook