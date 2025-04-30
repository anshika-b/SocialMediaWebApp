import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="full-form home">
      <p className="home-p">Surround yourself with people who not just support you and <br/>stay with you, but inform your thinking <br/> about ways
      to WOW your online presence on <br/><br/><span className='home-span'> FriendNet</span></p><br/>
      <p className='home-p'>You don’t need a corporation or a marketing company to brand <br/>you now: you can do it yourself.</p><br/><br/>
      <Link to ="/signup"><input type="submit" id="home-btn" value="Create My Account" /></Link>
    </div>
  )
}
