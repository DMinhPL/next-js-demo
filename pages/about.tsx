import React from 'react';
import background from '../assets/images/mu.jpg';
import Image from 'next/image';


const AboutPage = () => {
    return (
        <div>
            <h2>About Page</h2>
            <Image src={background} alt="" />
        </div>
    );
};

export default AboutPage;