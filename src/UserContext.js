import Axios from "axios"
import React, { createContext, useState } from "react"
import { URL_POST, USER_GET } from "./Hooks/Api"


export const UserContext = createContext()

export const UserStorage = ({children}) =>{
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loadding, setLoadding] = useState(false)
    const [error, setError] = useState(false)

    const getUser = async (token) =>{
        const { url, headers } = USER_GET(token)
        const response = await Axios.get(url, {headers: headers})
        const { data: credentials } = response
        setData(credentials)
        setLogin(true)
    }

     const userLogin = async (username, password) =>{
        const response = await Axios.post(URL_POST, {username, password})
        const { token } = response.data
        window.localStorage.setItem('token', token)
        getUser(token)
    }


    return (
        <UserContext.Provider value={{userLogin, data}}>
            {children}
        </UserContext.Provider>
    )
}