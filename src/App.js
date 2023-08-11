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
import Members from "./pages/Members"
import LoginCreate from "./Components/Login/LoginCreate"



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
            <Routes>  
              <Route path="/" element={<Home/>}/>
              <Route path="/login/*" element={<Login/>}/>
              <Route element={<ProtectedRoutes/>}>
                <Route path="/login/dashboard" element={<Dashboard/>}/>
                <Route path="/members/add" element={<AddMember/>}/>
                <Route path="/members/memberprofile/*" element={<MemberProfile/>}/>
                <Route path="login/members/*" element={<Members/>}/>
                <Route path="/login/loginCreate" element={<LoginCreate/>}/>
              </Route>
            </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
