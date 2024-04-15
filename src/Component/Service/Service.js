import React from 'react'
import './Service.css'
import delivery from '../Assets/fast-delivery_1670915.png'
import diploma from '../Assets/diploma_3529597.png'
import suppot from '../Assets/phone-call_1168358.png'
const Service = () => {
  return (
    <section className='service-section flex items-center justify-center'>
        <div className='service-container flex gap-20 justify-center items-center '>
            <div className='service-box'>
                <div className='sevice-icon'>
                    <img src={delivery} alt="icon" />
                </div>

                <div className='service-detail'>
                    <h4>Fast Delivery</h4>
                    <p>Efficient, reliable delivery ensuring swift customer satisfaction with every order.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='sevice-icon'>
                    <img src={diploma} alt="icon" />
                </div>

                <div className='service-detail'>
                    <h4>LICENSE OF GOVERNMENT</h4>
                    <p>Government-issued permit ensuring compliance with legal regulations and standards.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='sevice-icon'>
                    <img src={suppot} alt="icon" />
                </div>

                <div className='service-detail'>
                    <h4>SUPPORT24/7</h4>
                    <p>Round-the-clock assistance available for your convenience, always ready to help.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service