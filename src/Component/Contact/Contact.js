import React from 'react'
import './Contact.css'
import message from '../Assets/Messages-rafiki.png'

const Contact = () => {
  return (
    <section className='contact-section'>
        <div className='product-heading'>
                    <h4>Contact Us</h4>
                    <span>Reach Out to Us for Assistance and Inquiries Now!</span>
            </div>
        <div className='contact-container'>
            <div className='contact-left'>
                <div className='form-container'>
                <h2>Enquire Us!</h2>
                <form className='main-form'>
                    <div className='input-box'>
                        <label>Name</label>
                        <input type="text" placeholder='Your Name' required />
                    </div>
                    <div className='input-box'>
                        <label>Phone</label>
                        <input type="text" placeholder='Your Number' required />
                    </div>
                    <div className='input-box'>
                        <label>Email</label>
                        <input type="text" placeholder='Email Address' required />
                    </div>
                    <div className='input-box my-text'>
                        <label>Message</label>
                        <textarea  placeholder='Your Message'></textarea>
                    </div>
                    <div className='contact-btn'>
                        <button>Submit</button>
                    </div>
                </form>
                </div>
            </div>
            <div className='contact-right'>
                <div className='contact-img'>
                    <img src={message} alt="message" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact