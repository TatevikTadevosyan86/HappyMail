import React from "react";
import '/HeroSection.css';

const HeroSection = () =>{
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to HappyMail</h1>
                <p>Send personalized birthday messages effortlessly.</p>
                <button className="cta-button">Get started</button>
            </div>
        </section>
    );
};
export default HeroSection;