import React from 'react';
// import logo from "../img/logo.png";
import './Navbar2.css';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Navbar2() {
    return (
        <div className='navbar'>
        {/* <img src={logo} alt = "" /> */}
        <ul className='nav-items'>
            <li><span>FriendNet</span></li>
            <li>
                <form>
                    <input type='text' placeholder='Search' name='search-bar' className='search' />
                    <button type='submit' className='search-btn'><FaSearch /></button>
                </form>
            </li>
            <div className='nav-list'>
            <Link to="/createPost"><li><AiOutlinePlusCircle /></li></Link>
            <Link to="/signup"><li><IoHome /></li></Link>
            <Link to = "/signin"><li><FaRocketchat /></li></Link>
            <Link to = "/"><li><FcLike /></li></Link>
            <Link to = "/profile"><li><FaRegUserCircle /></li></Link>
            <Link to = "/logout"><li><TbLogout /></li></Link>
            </div>
        </ul>
    </div>
    )
}
