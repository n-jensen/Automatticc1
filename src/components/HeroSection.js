import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import back2 from './video/back2.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>

            <video src="./videos/back2.mp4" type="video/mp4" autoPlay={true} loop muted />

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for hello?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' ButtonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' ButtonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
