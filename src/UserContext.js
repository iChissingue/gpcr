import Axios from "axios"
import React, { createContext, useEffect, useState, useCallback } from "react"
import { 
    URL_POST, 
    USER_GET, 
    USER_TOKEN_VALIDATE, 
    USER_CREATE,
    MEMBERS_GET, 
} from "./Hooks/Api"
import { useNavigate } from "react-router-dom"


export const UserContext = createContext()

export const UserStorage = ({children}) =>{
    const [data, setData] = useState()
    const [membersData, setMembersData ] = useState()
    const [login, setLogin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const logOut = useCallback ( async () =>{
        setData(null)
        setLogin(false)
        setError(null)
        setLoading(false)
        window.localStorage.removeItem('token')
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
            setLoading(false)
            const response = await Axios.post(URL_POST, {username, password})
            if(response.status===200){
                const { token } = response.data
                window.localStorage.setItem('token', token)
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
                navigate('/login/dashboard')
                
            }else{
                setError(response.data)
            }
        } catch (error) {
            
        }
    }

    const listMembers = async () =>{
        const { url } = MEMBERS_GET()
        const response = await Axios.get(url)
        const {data} = response
        setMembersData(data)
    }


    async function autoLogin(){
        try {
            const token = window.localStorage.getItem('token')
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
        autoLogin()
        listMembers()
    }, [logOut])


    

    return (
        <UserContext.Provider value={{userLogin, createUser, logOut, listMembers, data, membersData, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}