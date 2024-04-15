import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <section className='product-section'>
            <div className='product-heading'>
                    <h4>Product</h4>
                    <span>OUR SEGMENTS</span>
            </div>
        <div className='product-container'>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShbrvsYoCWmWQhwMJsG3zbRoulmEYMuY93Cx5m8BBwvOAIBycg" alt="img"/>
                    </div>
                    <h2>CAPSULE</h2>
                    <div className='product-detail'>
                        <ul>
                            <li><i class="ri-arrow-right-circle-fill"></i>Sexual Health Capsule</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Capsule</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Fat Burning Supplement</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Diabetes Management Solution</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Joint Pain Relief Aid</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Hair Regrowth/ Hair Care </li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Immune System Booster</li>
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6N5EW0MvL0kwOtcv7k4ZRuniUK-HICblH_2ULcZNZS3tjoK5h" alt="img"/>
                    </div>
                    <h2>SYRUP</h2>
                    <div className='product-detail'>
                        <ul>
                            <li><i class="ri-arrow-right-circle-fill"></i>Sexual Health Syrup</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Diabeties Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Immunity Booster Syrup</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Apple Cider Juice/Syrup</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Digestive Syrup</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Enzyme Syrup</li>
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzXAJLXkg999pO0kMp8y2SaxGBN_f7Vf7Ir4nN1MI3P9mvma_0" alt="img"/>
                    </div>
                    <h2>POWDER</h2>
                    <div className='product-detail'>
                        <ul>
                            <li><i class="ri-arrow-right-circle-fill"></i>Sexual Health Supplement</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Supplement</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>De-Addiction Powder</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Toothpaste Powder</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Diabetes Powder</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Gas Churn</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Single Herbs Powder</li>
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYFPbx9MxWIHqLlAClTTcHYfeMN8jhU7lGOIJjHNo9V-4Wm2fW" alt="img"/>
                    </div>
                    <h2>DROP</h2>
                    <div className='product-detail'>
                        <ul>
                            <li><i class="ri-arrow-right-circle-fill"></i>Tulsi Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Alcohol De addiction Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Diabeties Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Gas Relief Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Single Herbs Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Eye Drop</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Ear Drop</li>
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGe1fErd5BO-sHZRUsPlYP2Mc499w_UtIbZpjnLGgfGRdoBjKw" alt="img"/>
                    </div>
                    {/* <h2>TABLET</h2> */}
                    <div className='product-detail mt-8'>
                        <ul>
                            <li className='text-center'>As a third party herbal product manufacturer, we specialize in high quality herbal health supplements. Our products are crafted using natural ingredients and adhere to fssai standards.</li>
                            {/* <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Loss Syrup/Juice</li> */}
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
                 <div className='product-box'>
                    <div className='product-img'>
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStZWO84deHnFbMl608sRJElxno7fUFRCqPW2gTl2E9JeozyKlz" alt="img"/>
                    </div>
                    <h2>TABLET</h2>
                    <div className='product-detail'>
                        <ul>
                            <li><i class="ri-arrow-right-circle-fill"></i>Sexual Health Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Weight Management Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>De-Addiction Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Toothpaste Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Gas Relief Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Single Herbs Tablet</li>
                            <li><i class="ri-arrow-right-circle-fill"></i>Immunity Booster Tablet</li>
                        </ul>
                    </div>
                    <div className="product-button">
                        <span><a href="tel:888 999 7773">Call Now</a></span>
                    </div>
                 </div>
        </div>
    </section>
  )
}

export default Product