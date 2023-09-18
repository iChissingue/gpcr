import Axios from "axios"
import React, { createContext, useEffect, useState, useCallback } from "react"
import { 
    URL_POST, 
    USER_GET, 
    USER_TOKEN_VALIDATE, 
    USER_CREATE,
    MEMBER_GET,
    MEMBERS_GET,
    MEMBERS_POST,
    SAVINGS_POST,
    REFUND_POST,
    LOAN_POST,
    SAVINGS_GET,
    MEMBER_DELETE,
    ALLSAVINGS_GET, 
    ALLREFUNDS_GET, 
} from "./Hooks/Api"
import { useNavigate } from "react-router-dom"




export const UserContext = createContext()

export const UserStorage = ({children}) =>{
    const [data, setData] = useState()
    const [confirm, setConfirm] = useState()
    const [memberData, setMemberData] = useState()
    const [memberSavings, setMemberSavings] = useState()
    const [memberLoans, setMemberLoans] = useState()
    const [memberRefunds, setMemberRefunds] = useState()
    const [membersData, setMembersData ] = useState()
    const [savingsReportData, setSavingsReportData ] = useState()
    const [allSavings, setAllSavings ] = useState()
    const [allRefunds, setAllRefunds ] = useState()
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    const logOut = useCallback ( async () =>{
        setData(null)
        setLogin(false)
        setError(null)
        setLoading(false)
        window.sessionStorage.clear()
        navigate('/login')
    }, [navigate])

    
    const getUser = async (token) =>{
        const { url, headers } = USER_GET(token)
        const response = await Axios.get(url, {headers: headers})
        const { data: credentials } = response
        setData(credentials)
        setLogin(true)
    }
    
    const userLogin = async (username, password) =>{
        try {
            setError(null)
            setLoading(true)
            const response = await Axios.post(URL_POST, {username, password})
            if(response.status===200){
                const { token } = response.data
                window.sessionStorage.setItem('token', token)
                await getUser(token)
                navigate('/login/dashboard')
            }else{
                setError(response.data)
            }
            
        } catch (error) {
            setError(error.message)
            setLogin(false)
        } finally{
            setLoading(false)
        }
    }

    const createUser = async (
        name, 
        username, 
        password, 
        confirmPassword, 
        userCategory, 
        userState) =>{
        try {

            const { url } = USER_CREATE()
            const response = await Axios.post(url, {name, username, password, confirmPassword, userCategory_id:userCategory, userState_id:userState})
            console.log(response)
            if(response.status===200){
                const { data } = response
                setError(data)
                userLogin(username, password)
                navigate('/login/dashboard')
                
            }else{
                setError(response.data)
            }
        } catch (error) {
            
        }
    }


    const createMember = async (
        name, 
        age, 
        inheritant, 
        sex, 
        admissionDate, 
        adress_id,
        contact
        ) =>{
        // try {

            const { url } = MEMBERS_POST()
            const response = await Axios.post(url, {name, age, inheritant, sex, admissionDate, adress_id, contact})
            console.log(response)
            if(response.status===200){
                const { data } = response
                setError(data)
                navigate('/login/members')
                listMembers()
                
            }else{
                setError(response.data)
            }
        // } catch (error) {
            
        // }
    }

    const listMembers = async () =>{
        const { url } = MEMBERS_GET()
        const response = await Axios.get(url)
        const {data} = response
        setMembersData(data)      
    }
    
    const listSavings = async (savingsReportData) =>{
        const { url } = SAVINGS_GET(savingsReportData)
        const response = await Axios.get(url,)
        const {data} = response
        console.log(data)
        setSavingsReportData(data)      
    }

    const listAllSavings = async () =>{
        const { url } = ALLSAVINGS_GET()
        const response = await Axios.get(url,)
        const {data} = response
        setAllSavings(data)      
    }
    const listAllRefunds = async () =>{
        const { url } = ALLREFUNDS_GET()
        const response = await Axios.get(url,)
        const {data} = response
        setAllRefunds(data)      
    }


    const refreshRetrive = () =>{
        const retrivedData = window.sessionStorage.getItem('member')
        const retrivedSavings = window.sessionStorage.getItem('memberSavings')
        const retrivedLoans = window.sessionStorage.getItem('memberLoans')
        const retrivedRefunds = window.sessionStorage.getItem('memberRefunds')
        const json = JSON.parse(retrivedData)
        const json1 = JSON.parse(retrivedSavings)
        const json2 = JSON.parse(retrivedLoans)
        const json3 = JSON.parse(retrivedRefunds)
        setMemberData(json)
        setMemberSavings(json1)
        setMemberLoans(json2)
        setMemberRefunds(json3)
    }

    const selectMember = async (id) =>{
        const { url } = MEMBER_GET(id)
        const response = await Axios.get(url)
        if(response.status ===200){
            const { member, memberSavings, memberLoans, memberRefunds} = response.data            
            const mData ={...member, adress: response.data.description}
            setMemberData(mData)
            setMemberSavings(memberSavings) 
            setMemberLoans(memberLoans)
            setMemberRefunds(memberRefunds)
            window.sessionStorage.setItem('member',  JSON.stringify(mData))
            window.sessionStorage.setItem('memberSavings',  JSON.stringify(memberSavings))
            window.sessionStorage.setItem('memberLoans',  JSON.stringify(memberLoans))
            window.sessionStorage.setItem('memberRefunds',  JSON.stringify(memberRefunds))
            navigate(`/members/memberprofile/memberidentity${id}`)
        }else{
            refreshRetrive()
        }      
    }

    const savingsRecord = async (savingsData) =>{
        const { url} = SAVINGS_POST(savingsData)
        const response = await Axios.post(url, savingsData)
        setConfirm(response.data)
    }

    const loanRecord = async (loanData) =>{
        const { url} = LOAN_POST(loanData)
        const response = await Axios.post(url, loanData)
        setConfirm(response.data)
    }
    
    const refundRecord = async (refundData) =>{
        const { url} = REFUND_POST(refundData)
        const response = await Axios.post(url, refundData)
      
    }


 
    const memberDelete = async (id) =>{
        const { url } = MEMBER_DELETE(id)
        const response = await Axios.delete(url)
        setConfirm(response.data)
    }

    async function autoLogin(){
        try {
            const token = window.sessionStorage.getItem('token')
            if(token){
                setError(null)
                setLoading(true)
                const { url, body } = USER_TOKEN_VALIDATE(token)
                const response = await Axios.post(url, body)
                if(!response.status===200)throw new Error(response.data)
                    await getUser(token)
            }else{
                setLogin(false)
            }
        } catch (error) {
            logOut()
        }finally{
            setLoading(false)
        }
    }

    useEffect (() => {
        refreshRetrive()
        autoLogin()
        listMembers()
        selectMember()
        listAllSavings()
        listAllRefunds()
    }, [] )


    

    return (
        <UserContext.Provider value={{
            userLogin, 
            createUser, 
            createMember, 
            selectMember, 
            logOut,
            savingsRecord,
            loanRecord,
            refundRecord, 
            memberDelete,
            listSavings,
            listMembers,
            memberSavings,
            savingsReportData,
            allSavings,
            allRefunds,
            memberLoans,
            memberRefunds,
            data, 
            memberData, 
            membersData, 
            error, 
            loading, 
            login,
            confirm
            }}>
            {children}
        
        </UserContext.Provider>
    )
}