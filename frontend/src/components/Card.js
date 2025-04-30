import React from 'react';
import "./Card.css";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Card(props) {
    return (
        <div className='homepage'>
            <div className='user'>
            <img alt='' src={props.userimage} className='userimage'/>
            <h2>{props.username}</h2>
            </div>
            <div className='one-post'>
            <img alt='' src={props.image}/>
            <div className='post-content'>
            <h1>{props.title}</h1>
            <p className='p-desc'>{props.description}</p>
            <div className='like-count'>
            <p className='like-comm'> {props.likes} likes {props.comments} comments</p>
            <button type='button' className='btn'><BiLike /></button>
            <button type='button' className='btn'><AiOutlineComment /></button>
            <button type='button' className='btn'><IoShareSocialOutline /></button>
            <input type='text' placeholder='Enter your comment'></input>
            <button type='button' className='submit'>Submit</button>
            </div>
            </div>
            </div>
        </div>
    )
}
