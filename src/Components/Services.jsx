import React from 'react';
import logo1 from '../Images/email.png';
import support from '../Images/support.png';
import product from '../Images/product developmnt.png';
import development from '../Images/development logo.png';
import mobile from '../Images/mobile development.png';
import '../App.css';

function Services() {
    return (
        <>
            <div className="Services" id="services">
                <h1 className="services-heading">Services</h1> 
                <div className='service-container'>
                    <div className="service1">
                        <img src={development} className="logo1" alt="Custom Software Development" />
                        <h4>Custom Software Development</h4>
                        <p>Initwave strives to deliver best-in-class custom software development services.</p>
                    </div>

                    <div className="service1">
                        <img src={product} className="logo1" alt="Product Development" />
                        <h4>Product Development</h4>
                        <p>Stay ahead of the competition with Initwave scalable, timely, futuristic software product development solutions</p>
                    </div>

                    <div className="service1">
                        <img src={support} className="logo1" alt="Initwave Priority Support" />
                        <h4>Initwave Priority Support</h4>
                        <p>Here, at Initwave, we recognise the significance of providing dependable assistance for your business system</p>
                    </div>

                    <div className="service1">
                        <img src={mobile} className="logo1" alt="Web Application Development" />
                        <h4>Web Application Development</h4>
                        <p>Initwave specializes in web application development, providing tailored solutions to meet your unique business needs.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
