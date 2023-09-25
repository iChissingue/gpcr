import { NavLink, Route, Routes } from "react-router-dom"
import styles from "../pages/MemberProfile.module.css"
import SaveForm from "./SaveForm"
import LoanForm from "./LoanForm"
import RefundForm from "./RefundForm"

const MemberUpdatesNav = () =>{
    return (
        <div>
    
            <nav className={styles.buttons}>
                <NavLink to="/members/memberprofile/save"><button>Poupar</button></NavLink>
                <NavLink to="/members/memberprofile/loan"><button>Emprestar</button></NavLink>
                <NavLink to="/members/memberprofile/refund"><button>Reembolsar</button></NavLink>
                
            </nav>
            <hr />
                <Routes style={{display: 'block'}}>
                    <Route path="/save" element={<SaveForm/>}/>
                    <Route path="/loan" element={<LoanForm/>}/>
                    <Route path="/refund" element={<RefundForm/>}/>
                </Routes>
        </div>
    )

}

export default MemberUpdatesNav