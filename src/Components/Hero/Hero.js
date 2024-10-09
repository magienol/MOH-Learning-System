import React from 'react'
import "./Hero.css"
import classroom from "../../assets/class.jpg"

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <h1 className='hero_header'> Unlock Youre Potential with MOH South Sudan 
          <br /> Online Courses</h1>
      <p>
        Personnal Learning experiances designed to help achieve youre professional 
        <br /> Personal goals. Gain the Skills to excel in today's fast-pacd world. 
      </p>
      <div className='btn'>
        <button className='cta_button'> Explore Courses</button>
        </div>
        <img src={classroom} alt='hero_img' className='hero_img' />
      </div>

    </div>
  )
}

export default Hero
