import React from 'react'
import "./Trusted.css"
import glovo from "../../assets/glovo-logo.svg"
import oracle from "../../assets/oracle-logo.svg"
import paypal from "../../assets/paypal-logo.svg"
import payoneer from "../../assets/payoneer-logo.svg"
import stripe from "../../assets/stripe-logo.svg"


const Trusted = () => {
  return (
    <div>
    <div className='trusted'> 
      <div className='truested_container'>
        <h3 className='trusted_header'> Our Alumini works in below NGOS </h3>
      <div className='trusted_img'>
        <img src={glovo} alt='' className='logo'/>
        <img src={oracle} alt='' className='logo'/>
        <img src={paypal} alt='' className='logo'/>
        <img src={payoneer} alt='' className='logo'/>
        <img src={stripe} alt='' className='logo'/>
        <img src={glovo} alt='' className='logo'/>
        <img src={oracle} alt='' className='logo'/>
        <img src={paypal} alt='' className='logo'/>
        <img src={payoneer} alt='' className='logo'/>
       
      </div>
      
      </div>
    </div>
    </div>
  )
}

export default Trusted
