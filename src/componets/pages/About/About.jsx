import React from 'react'
import './About.css' 
import img  from '../../../assets/books-.png'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about_us">
                    <div className="content">
                        <h1>About Us</h1>
                        <p>
                            Welcome to our team, where we're dedicated to fueling your love for literature. Our mission is to be your trusted guide in the vast world of books, offering curated recommendations, exclusive author insights, a thriving community, and valuable resources. Founded by [Founder(s) Name(s)] in [Year], we've grown from a passion project into a vibrant online hub for book enthusiasts. Connect with us, explore our curated selections, and let's embark on a literary journey together. Happy reading!
                        </p>
                    </div>
                    <div className="about_image">
                        <img src={img} alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About