import React from 'react'
import '../Style/Footer.css'
import socialmedia from '../Assets/Group 79.svg'
import {ImArrowUp} from 'react-icons/im'


const Footer = () => {
  return (
    <div id='footers'>
        <div id='footer-pro'>
            <h5>Products</h5>
            <p>Bitcoin</p>
            <p>Alt</p>
            <p>Fiat</p>
            <p>Refill</p>
            <p>P2P</p>
        </div>
        <div>
            <h5>Learn</h5>
            <p>Blog</p>
            <p>Help Center</p>
        </div>
        <div>
          <h5>Contacts</h5>
          <p>hello@tradeexpress.com</p>
          <p>support@tradeexpress.com</p>
          <img src={socialmedia} alt="" />
        </div>
        <div>
          <h5>Company</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>
        <div>
          <h5>Legal</h5>
          <p>Privacy Policy</p>
          <p>Anti-Money Laundering</p>
          <p>Terms and Conditions</p>
        </div>
        <div id='arrowup'>
          <a href="#navbar"><ImArrowUp size={40} style={{color: "#B145FF", }}/></a>

        </div>
        
    </div>
  )
}

export default Footer