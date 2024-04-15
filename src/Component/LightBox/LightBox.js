import React from 'react'
import './LightBox.css'
import t_img1 from './Light_Image/t-1.jpeg'
import t_img2 from './Light_Image/t-2.jpeg'
import t_img3 from './Light_Image/t-3.jpeg'
import t_img4 from './Light_Image/t-4.jpeg'
import t_img5 from './Light_Image/t-5.jpeg'
import t_img6 from './Light_Image/t-6.jpeg'
import t_img7 from './Light_Image/t-7.jpeg'
import t_img8 from './Light_Image/t-8.jpeg'
import t_img9 from './Light_Image/t-9.jpeg'
import t_img10 from './Light_Image/t-10.jpeg'
import combo1 from './Light_Image/combo1.jpeg'
import combo2 from './Light_Image/combo2.jpeg'
import combo3 from './Light_Image/combo3.jpeg'
// import { LightGallery } from 'lightgallery/lightgallery'
import LightGallery from 'lightgallery/react/Lightgallery.es5'
import "lightgallery/css/lightgallery.css";


const LightBox = () => {
  return (
    <section className='lightbox-section'>
         <div className='product-heading'>
                    <h4>Product</h4>
                    <span>Herbal Health Supplement Capsule</span>
          </div>
      <div className='lightbox-container'>
        <LightGallery elementClassNames="galleryclass" speed={500} plugins={[]}>
          <div className='lightbox-div'>
            <a href={t_img1} data-src={t_img1}>
              <img src={t_img1} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img2">
              <img src={t_img2} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img3">
              <img src={t_img3} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img4">
              <img src={t_img4} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img5">
              <img src={t_img5} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img6">
              <img src={t_img6} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img7">
              <img src={t_img7} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img8">
              <img src={t_img8} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img9">
              <img src={t_img9} alt="img" />
            </a>
          </div>
          <div className='lightbox-div'>
            <a href="t_img10">
              <img src={t_img10} alt="img" />
            </a>
          </div>
        </LightGallery>
      </div>

      <div className='lightbox-combo'>
      <div className='product-heading'>
                    <h4>Product Combo</h4>
                    <span>Herbal Health Supplement Combos</span>
          </div>
          <LightGallery elementClassNames="gallerycombo" speed={500} plugins={[]}>
            <div className='lightbox-combo-div'>
            <a href="combo1">
              <img src={combo1} alt="img" />
            </a>
            </div>
            <div className='lightbox-combo-div'>
            <a href="combo2">
              <img src={combo2} alt="img" />
            </a>
            </div>
            <div className='lightbox-combo-div'>
            <a href="combo3">
              <img src={combo3} alt="img" />
            </a>
            </div>
          </LightGallery>
      </div>
    </section>
  )
}

export default LightBox