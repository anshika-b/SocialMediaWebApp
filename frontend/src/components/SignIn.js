import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div>
    <div className="full-form">
        <p className="pform">
            Sign In to login your account on <br /> <span>FriendNet</span>
        </p>
        <div>
            {/* <input type="email" name="email" id="email" placeholder="Email"></input><br /> */}
            {/* <input type="text" name="name" id="name" placeholder="Full Name"></input><br /> */}
            <input type="text" name="username" id="username" placeholder="Username"></input><br />
            <input type="password" name="password" id="password" placeholder="Password"></input><br />
        </div>
        <p className="pform">
            By Signing In, you agree to our <br /> terms, privacy policy and cookies policy
        </p>
        <input type="submit" id="submit" value="Sign In" />
    </div>
        <div className="next-form">
        Don't have an account? 
        <Link to="/signup">
        <span className="button">Sign Up</span>
        </Link>
    </div>
    </div>
  )
}
