import { useContext } from "react"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberIdentityNav from "./MemberIdentityNav"
import MemberStateResume from "./MemberStateResume"

const MemberProfile = () =>{
    const { memberData, confirm,  data, selectMember} = useContext(UserContext)
  
        return(
            <div className={styles.memberProfile}>                
                <div className={styles.profile}>
                    <b>{memberData.name}</b>
                    <MemberIdentityNav/>
                </div>
                <div className={styles.savings} >
                    <MemberStateResume {...data}/>     
                </div>
            </div>
        )
}

export default MemberProfile