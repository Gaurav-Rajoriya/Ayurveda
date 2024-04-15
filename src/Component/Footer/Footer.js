import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import design from '../Assets/Untitled design (29).png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4 className='company'>Aryavarta Ayurveda</h4>
          <div className='foote-text'>
            <p> Ayurvedic products meticulously crafted from the purest
              ingredients sourced from our farm.</p>
            <p>@gmail.com</p>
           
          </div>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
          <li><Link to="/">Home</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/testimonial">Testimonial</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#">quality</a></li>
            <li><a href="#">Ayurvedic</a></li>
            <li><a href="#">purity</a></li>
            <li><a href="#">look</a></li>
           
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <Link target='blank' to="https://www.instagram.com/aryavarta_ayurveda001/"><i class="ri-instagram-line"></i></Link>
            <Link target='blank' to="https://www.facebook.com/people/Aryavarta-Ayurveda/61558554261044/"><i class="ri-facebook-circle-fill"></i></Link>
            <Link to=""><i class="ri-linkedin-box-fill"></i></Link>
            <Link to=""><i class="ri-youtube-fill"></i></Link>
          
          </div>
        </div>
      </div>
    </section>
    <div className='copyright flex items-center justify-between'>
      <h2>@2024 Design by <span><Link to='https://dgmt.in/'>DGMT.in.Pvt.Ltd</Link></span></h2>
      <h2>All right reservd by <span><Link to={'/'}>Aryavarta Ayurveda</Link></span></h2>
    </div>
    </div>
  )
}

export default Footer  