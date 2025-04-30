import React, {useEffect,useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const postData =() =>{
        // sending data to server
        fetch("http://localhost:3000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                username:username,
                password:password
            })
        }).then(res=>res.json())
        .then(data =>{console.log(data)})
    }
  return (
    <div className="form">
    <div className="full-form">
        <p className="pform">
            Sign Up to create your account on <br /> <span>FriendNet</span>
        </p>
        <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input><br />
            <input type="text" name="name" id="name" value={name} placeholder="Full Name" onChange={(e)=>{
                setName(e.target.value)
            }}></input><br />
            <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={(e)=>{
                setUsername(e.target.value)
            }}></input><br />
            <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input><br />
        </div>
        <p className="pform">
            By Signing Up, you agree to our <br /> terms, privacy policy and cookies policy
        </p>
        <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>{postData()}} />
    </div>
    <div className="next-form">
        Already have an account? 
        <Link to="/homepage">
        <span className="button">Sign In</span>
        </Link>
    </div>
</div>
  )
}
