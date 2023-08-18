import { useContext } from "react"
import { Routes, Route, useNavigate, NavLink } from "react-router-dom"
import { UserContext } from "../UserContext"
import styles from "../pages/MemberProfile.module.css"
import MemberSavings from "./MemberSavings"
import Save from "./Save"
import Loan from "./Loan"
import Refund from "./Refund"
import MemberUpdatesNav from "./MemberUpdatesNav"
import MemberIdentity from "./MemberIdentity"
import MemberRefunds from "./MemberRefunds"

const MemberProfile = () =>{
    const { memberData, confirm,  data, selectMember} = useContext(UserContext)
  
        return(
            <div style={{display: 'flex', margin: 'auto'}}>

                <div  style={{display: 'flex', margin: 'auto'}}>
                <div className={styles.profile}>
                    <b>{memberData.name}</b>
                <nav className={styles.buttons}>
                    <NavLink to="/members/memberprofile/memberidentity"><button>Identidade</button></NavLink>
                    <NavLink to="/members/memberprofile/membersavings"><button>Poupancas</button></NavLink>
                    <NavLink to="/members/memberprofile/loans"><button>Emprestimos</button></NavLink>
                    <NavLink to="/members/memberprofile/refunds"><button>Reembolsos</button></NavLink>
                </nav>
                    <Routes style={{display: 'block'}}>
                        <Route path="/memberidentity" element={<MemberIdentity/>}/>
                        <Route path="/membersavings" element={<MemberSavings/>}/>
                        <Route path="/memberrefunds" element={<MemberRefunds/>}/>
                    </Routes>
                
                </div>
                <div className={styles.savings} >
                        <MemberUpdatesNav/>
                    <div className={styles.buttons}>
                        <Routes style={{display: 'block'}}>
                            <Route path="/save" element={<Save/>}/>
                            <Route path="/loan" element={<Loan/>}/>
                            <Route path="/refund" element={<Refund/>}/>
                        </Routes>
                    </div>
                </div>
                </div>
            </div>
        )
}

export default MemberProfile