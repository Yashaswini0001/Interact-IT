import { useState } from 'react';

import '../About-us.css';
import Image from '../Images/goal1.jpg'; 
import Slider from './Slider';



function AboutUs() {
    
   
    const peopleData = [
        { name: "John Doe", position: "CEO", image: "john_doe.jpg" },
        { name: "Jane Smith", position: "CTO", image: "jane_smith.jpg" },
       
    ];

    return (
        <div className="about-us-container">
            <div className="top-section">
            <p>About Us</p>
            </div>
           
            <div className="overview-section">
                <h2>Overview</h2>
                <p>Interact IT Solutions is a pioneering force in the realm of engineering services, specializing in core engineering design, product development, smart manufacturing, and digitalization. Our expertise lies in crafting innovative solutions tailored to meet the dynamic demands of the engineering services landscape.

Managed by a seasoned team of professionals, Interact IT Solutions is committed to cultivating a robust ecosystem characterized by a seamless integration of cutting-edge competencies and unparalleled global delivery excellence.Our comprehensive range of services includes:
</p><p>
1.Custom Software Development: Leverage our expertise in developing bespoke software solutions tailored to your unique business requirements.</p>
<p>
2.Product Development: Stay ahead of the curve with our scalable and futuristic product development solutions designed to propel your business forward.
</p>
<p>
3.Interact Priority Support: Recognizing the critical importance of reliable support, we offer dedicated assistance to ensure the seamless operation of your business systems.
</p>
<p>
4.Mobile Application Development: Unlock the potential of mobile technology with our customized application development solutions catering to iOS and Android platforms.
</p>
<p>
At Interact IT Solutions, our mission is to collaborate closely with our clients to deliver innovative and cost-effective solutions that drive tangible value. With a focus on reliability, efficiency, and client satisfaction, we are dedicated to empowering businesses to thrive in an ever-evolving technological landscape.</p>
            </div>
            <div className="mission-section">
                <h2>Our Mission</h2>
              
<p>Our mission at Interact IT is to revolutionize the engineering services industry by leveraging cutting-edge technologies and innovative solutions. We are committed to empowering businesses with the tools they need to thrive in a rapidly evolving digital landscape.</p>
<p>Through a relentless pursuit of excellence, we aim to redefine the standard of quality and reliability in engineering design, product development, smart manufacturing, and digitalization. Our team of seasoned professionals is dedicated to delivering unparalleled value to our clients, ensuring that they remain at the forefront of innovation and competitiveness.</p>
<p></p>
            </div>
            <Slider/>
           
        </div>
    );
}

export default AboutUs;
