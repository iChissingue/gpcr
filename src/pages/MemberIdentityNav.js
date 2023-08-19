import { NavLink } from "react-router-dom"
import styles from "./MemberProfile.module.css"
import MemberIdentityRoutes from "./MemberIdentityRoutes"
import MemberUpdatesNav from "./MemberUpdatesNav"

const MemberIdentityNav = () =>{
    return (
        <div>
            <nav className={styles.buttons}>
                <NavLink to="/members/memberprofile/memberidentity"><button>Identidade</button></NavLink>
                <NavLink to="/members/memberprofile/membersavings"><button>Poupancas</button></NavLink>
                <NavLink to="/members/memberprofile/memberloans"><button>Emprestimos</button></NavLink>
                <NavLink to="/members/memberprofile/memberrefunds"><button>Reembolsos</button></NavLink>
            </nav>
            <MemberUpdatesNav/>
            <MemberIdentityRoutes/>
        </div>
    )
}

export default MemberIdentityNav