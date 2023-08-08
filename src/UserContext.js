import React, { createContext, useState } from "react"


export const UserContext = createContext()

export const UserStorage = ({children}) =>{
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loadding, setLoadding] = useState(false)
    const [erro, setError] = useState(false)


    return (
        <UserContext.Provider value={{username: 'ichissingue'}}>
            {children}
        </UserContext.Provider>
    )
}