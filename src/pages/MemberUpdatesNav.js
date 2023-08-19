import { NavLink, Route, Routes } from "react-router-dom"
import styles from "../pages/MemberProfile.module.css"
import Save from "./SaveForm"
import Loan from "./LoanForm"
import Refund from "./RefundForm"

const MemberUpdatesNav = () =>{
    return (
        <div>
            <nav className={styles.buttons}>
                <NavLink to="/members/memberprofile/save"><button>Poupar</button></NavLink>
                <NavLink to="/members/memberprofile/loan"><button>Emprestar</button></NavLink>
                <NavLink to="/members/memberprofile/refund"><button>Reembolsar</button></NavLink>
            </nav>
                <Routes style={{display: 'block'}}>
                    <Route path="/save" element={<Save/>}/>
                    <Route path="/loan" element={<Loan/>}/>
                    <Route path="/refund" element={<Refund/>}/>
                </Routes>
        </div>
    )

}

export default MemberUpdatesNav