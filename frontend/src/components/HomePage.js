import React from 'react';
import "./HomePage.css";
import Card from './Card';
import testimage from "../img/testimage.webp";
import image1 from "../img/image1.webp";

export default function HomePage() {
  return (
    <div className='full-page'>
        <Card 
        // userimage={testimage}
        username= "anshika11"
        image={image1}
        title="Hello everyone"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum."
        likes="5"
        comments="8"
        />
        <Card 
        username= "anshika11"
        image={testimage}
        title="Hello everyone"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum."
        likes="5"
        comments="8"
        />
        <Card 
        username= "anshika11"
        image={testimage}
        title="Hello everyone"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum."
        likes="5"
        comments="8"
        />
        <Card 
        username= "anshika11"
        image={testimage}
        title="Hello everyone"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam sapiente molestiae, 
        obcaecati incidunt hic voluptates. Aut voluptatem delectus debitis, voluptatibus facere maiores veritatis quisquam saepe 
        tempore, error, et nostrum."
        likes="5"
        comments="8"
        />
    </div>
  )
}
