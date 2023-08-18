import { NavLink } from "react-router-dom"
import styles from "../pages/MemberProfile.module.css"

const MemberUpdatesNav = () =>{
    return (
        <nav className={styles.buttons}>
            <NavLink to="/members/memberprofile/save"><button>Poupar</button></NavLink>
            <NavLink to="/members/memberprofile/loan"><button>Emprestar</button></NavLink>
            <NavLink to="/members/memberprofile/refund"><button>Reembolsar</button></NavLink>
        </nav>
    )

}

export default MemberUpdatesNav