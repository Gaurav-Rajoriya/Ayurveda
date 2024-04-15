import React from 'react'
import { Link } from 'react-router-dom'
import './Discount.css'

const Discount = () => {
  return (
    <section className='discount-section'>
        <div className='discount-container'>
            <div className='discount-detail'>
                <div className='discount-detailbox'>
                <h4>
                YOU <br/> GET ANY  MEDICINE <br/>
               ON<span>10% DISCOUNT</span> 
                </h4>

                <p>Discovering Nature's Healing Power: Your Journey to Complete Well-Being</p>

                <div className='discount-button'>
                    <Link to={'#'}>Buy Now</Link>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount