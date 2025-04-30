import logo from "./logo.svg";
import "./App.css";
import Navbar2 from "./components/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Profile from './components/Profile';
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";


function AfterLogin() {
    return (
        <BrowserRouter>
            <div className="AfterLogin">
                <Navbar2 />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/logout" element={<Home />}></Route>
                    <Route path="/createPost" element={<CreatePost />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AfterLogin;
