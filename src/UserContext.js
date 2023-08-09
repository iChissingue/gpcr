import Axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { URL_POST, USER_GET, USER_TOKEN_VALIDATE } from "./Hooks/Api"


export const UserContext = createContext()

export const UserStorage = ({children}) =>{
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loadding, setLoadding] = useState(false)
    const [error, setError] = useState(false)

    useEffect (() => {
        async function autoLogin(){
            const token = window.localStorage.getItem('token')
            console.log(token)
            if(token){
                const { url, body } = USER_TOKEN_VALIDATE(token)
                const response = await Axios.post(url, body)
                console.log(response)
            }else{
                return false
            }
        }
        autoLogin()
    }, [])

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
            setLoadding(false)
            const response = await Axios.post(URL_POST, {username, password})
            const { token } = response.data
            window.localStorage.setItem('token', token)
            await getUser(token)
            
        } catch (error) {
            setError(error.message)
            setLogin(false)
        } finally{
            setLoadding(false)
        }
    }

    const logOut = async () =>{
        setData(null)
        setLogin(false)
        setError(null)
        setLoadding(false)
        window.localStorage.removeItem('token')
    }


    return (
        <UserContext.Provider value={{userLogin, logOut, data}}>
            {children}
        </UserContext.Provider>
    )
}