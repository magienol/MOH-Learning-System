import React from 'react'
import "./Footer.css"
import facebook from "../../assets/facebook_icon.png"
import twitter from "../../assets/twitter_icon.png"
import linkedin from "../../assets/linkedin_icon.png"


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer_content'>
          <div className='content_left'>
            <h2> Ministry of Health - South Sudan</h2>
            <p>From beginners to advance learners, find course that fit your level and interests.</p>
            <div className='social_icons'>
              <img src={facebook} alt='social_icons' className='icons' />
              <img src={twitter} alt='social_icons' className='icons' />
              <img src={linkedin} alt='social_icons' className='icons' />
            </div>

          </div>
          <div className='content_center'>
            <h2> HISP South Sudan </h2>
            <ul>
              <li>Home </li>
              <li>About Us </li>
              <li>Services </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='content_right'>
            <h2> GET IN TOUCH</h2>
            <ul>
              <li>Phone: (+211) 928 836 999</li>
              <li>Email: waheed@moh.gov.ssd</li>
              <li>Address: Ministry Complex, near Ministry of Interior</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='copyright'> Copyright 2024 @HISP South Sudan. All right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
