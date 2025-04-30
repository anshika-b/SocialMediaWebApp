import React from 'react';
import "./Profile.css";
import testimage from "../img/testimage.webp";
import image1 from "../img/image1.webp";
import image2 from "../img/image2.webp";
import image3 from "../img/image3.webp";
import image4 from "../img/image4.webp";
import image5 from "../img/image5.webp";

export default function Profile() {
  return (
    <div className='profile-page'>
      <div>
      <img src={image3} alt='' />
      <div className='content-page'>
        <span className='user'>anshika11</span>
        <div className='about-content'>
          <li> 5 post</li>
          <li> 50 followers</li>
          <li> 100 following</li>
        </div>
        <li className='username'>Anshika Beohar</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum.</li>
      </div>
      </div>
      <div>
        <span className='post-name'>My Posts</span>
        <div className='post-images'>
          <img src={image1} alt='' />
          <img src={image2} alt='' />
          <img src={image3} alt='' />
          <img src={image4} alt='' />
          <img src={image5} alt='' />
        </div>
      </div>
    </div>
  )
}
