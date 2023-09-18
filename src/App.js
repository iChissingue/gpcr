import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Login from "./Components/Login/Login"
import {  UserStorage } from "./UserContext"
import './App.css'
import Dashboard from "./Components/DashBoard"
import AddMember from "./pages/AddMember"
import MemberProfile from "./pages/MemberProfile"
import ProtectedRoutes from "./Components/Help/ProtectedRoutes"
import {ProtectedLoginRoute} from "./Components/Help/ProtectedRoutes"
import Members from "./pages/Members"
import LoginCreate from "./Components/Login/LoginCreate"
import Reports from "./pages/Reports"
import HelpPage from "./pages/HelpPage"
import Admin from "./pages/Admin"
import EditMember from "./pages/EditMember"





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Routes>  
              <Route path="/" element={<Home/>}/>
              <Route element={<ProtectedLoginRoute/>}>
                <Route path="/login/*" element={<Login/>}/>
              </Route>
              <Route element={<ProtectedRoutes/>}>
                <Route path="/login/dashboard" element={<Dashboard/>}/>
                <Route path="/members/add" element={<AddMember/>}/>
                <Route path="/members/memberprofile/*" element={<MemberProfile/>}/>
                <Route path="/members/memberprofile/editmember" element={<EditMember/>}/>
                <Route path="login/members/*" element={<Members/>}/>
                <Route path="/login/loginCreate" element={<LoginCreate/>}/>
                <Route path="/login/reports/*" element={<Reports/>}/>
                <Route path="/login/admin" element={<Admin/>}/>
                <Route path="/login/helppage" element={<HelpPage/>}/>
              </Route>
            </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
