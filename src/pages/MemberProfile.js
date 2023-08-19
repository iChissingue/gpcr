import { useContext } from "react"
import { Routes, Route, useNavigate, NavLink } from "react-router-dom"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberSavings from "./MemberSavings"
import Save from "./SaveForm"
import Loan from "./LoanForm"
import Refund from "./RefundForm"
import MemberUpdatesNav from "./MemberUpdatesNav"
import MemberIdentity from "./MemberIdentity"
import MemberRefunds from "./MemberRefunds"
import MemberIdentityNav from "./MemberIdentityNav"
import MemberIdentityRoutes from "./MemberIdentityRoutes"

const MemberProfile = () =>{
    const { memberData, confirm,  data, selectMember} = useContext(UserContext)
  
        return(
            <div style={{display: 'flex', margin: 'auto'}}>

                <div  style={{display: 'flex', margin: 'auto'}}>
                <div className={styles.profile}>
                    <b>{memberData.name}</b>
                    <MemberIdentityNav/>
                   
                </div>
                <div className={styles.savings} >
                        
                    <div className={styles.buttons}>
                        
                    </div>
                </div>
                </div>
            </div>
        )
}

export default MemberProfile