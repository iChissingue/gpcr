import { NavLink } from "react-router-dom"
import styles from "./MemberProfile.module.css"
import MemberIdentityRoutes from "./MemberIdentityRoutes"
import MemberUpdatesNav from "./MemberUpdatesNav"
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AddCardIcon from '@mui/icons-material/AddCard'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import SavingsIcon from '@mui/icons-material/Savings'

const MemberIdentityNav = () =>{

    return (
        <div>
            <nav className={styles.buttons}>
                <NavLink title="Identidade" style={{color: '#1976D2'}} to="/members/memberprofile/memberidentity"><PermIdentityIcon/></NavLink>
                <NavLink title="Poupanças" style={{color: '#1976D2'}} to="/members/memberprofile/membersavings"><SavingsIcon/></NavLink>
                <NavLink title="Empréstimos" style={{color: '#1976D2'}} to="/members/memberprofile/memberloans"><AddCardIcon/></NavLink>
                <NavLink title="Reembolsos" style={{color: '#1976D2'}} to="/members/memberprofile/memberrefunds"><CreditScoreIcon/></NavLink>
            </nav>
            <hr style={{marginBottom: -5}}/>
            <MemberUpdatesNav/>
        
            <MemberIdentityRoutes/>
        </div>
    )
}

export default MemberIdentityNav