import React from 'react'
// import { MdOutlineAddAPhoto } from "react-icons/md";
import testimage from "../img/testimage.webp";
import "./CreatePost.css";

export default function CreatePost() {
    const loadfile=(event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }}
    return (
    <div className='create-post'>
        <form action='#'>
        <div className='image'>
            <h3 className='head'>Create New Post</h3>
            {/* <div className='photo'> */}
                {/* <MdOutlineAddAPhoto /> */}
            {/* </div> */}
            <img id="output" />
            <input type='file' accept='image/*' onChange={(event)=>{
                loadfile(event)
            }}></input>
        </div>
        <div className='caption'>
            <div className='details'>
                <img className='profile' src={testimage} alt='profile' />
                {/* <p>Anshika</p> */}
            </div>
            <div className='submit-btn-create-post'>
            <input type='text' placeholder='Write the caption...'></input>
            <button type='submit' className='share'>Share</button>
            </div>
        </div>
        </form>
    </div>
    )
}