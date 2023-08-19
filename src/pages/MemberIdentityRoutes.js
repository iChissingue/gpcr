import { Route, Routes } from "react-router-dom"
import MemberIdentity from "./MemberIdentity"
import MemberSavings from "./MemberSavings"
import MemberRefunds from "./MemberRefunds"
import MemberLoans from "./MemberLoans"

const MemberIdentityRoutes = () =>{
    return (
        
            <Routes style={{display: 'block'}}>
                <Route path="/memberidentity/*" element={<MemberIdentity/>}/>
                <Route path="/membersavings" element={<MemberSavings/>}/>
                <Route path="/memberloans" element={<MemberLoans/>}/>
                <Route path="/memberrefunds" element={<MemberRefunds/>}/>
            </Routes>
        
    )
}

export default MemberIdentityRoutes