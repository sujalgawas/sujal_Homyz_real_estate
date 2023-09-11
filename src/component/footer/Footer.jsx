import React from 'react'

const Footer = () => {
    return (
        <div className="fo-wrapper innerWidth paddings ">
            <div className="foot-left">
                <img src="logo2.png" alt="" />
                <span className='flexColStart secondaryText'>
                    <span>Our vision is to make all people</span>
                    <span> the best place to live for them.</span>
                </span>
            </div>
            <div className="flexColStart foot-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 5467, USA</span>
                <div>
                    <ul className='list'>
                        <li>Property</li>
                        <li>Services</li>
                        <li>Product</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer