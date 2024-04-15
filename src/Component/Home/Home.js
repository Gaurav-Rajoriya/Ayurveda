import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Discount from '../Discount/Discount'
import Product from '../Product/Product'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import LightBox from '../LightBox/LightBox'


const Home = () => {
  return (
    <>
       <Hero />
       <Service />
       <About />
       <Discount/>
       <Product/>
       <Testimonial/>
       <LightBox/>
       <Contact/>
    </>
  )
}

export default Home