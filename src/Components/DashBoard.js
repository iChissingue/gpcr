import { useContext } from "react"

import { UserContext } from "../UserContext"



const Dashboard = () =>{
    const {data} = useContext(UserContext)


    return (
        <div className="container" >
            <p style={{textAlign: 'center', paddingTop: 200, color: '#1976D2'}}>Olá, <b>{data.name}</b>, seja bem vindo(a) ao Sistema de Gestão de PCR PFUNEKA!</p>  
        </div>
    )
}

export default Dashboard