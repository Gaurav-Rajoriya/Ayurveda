import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../Assets/AYA_LOGO-1-removebg-preview.png'

const TranslateWidget = () => {
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    if (!isInitialized) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      setIsInitialized(true);
    }

    return () => {
      // Remove the script only when the component unmounts
      if (isInitialized) {
        const scriptElement = document.getElementById('google-translate-script');
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      }
    };
  }, [isInitialized]);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  };

  return (
    <div className='converter flex w-full h-[20px] overflow-hidden' id="google_translate_element"></div>
  );
};

const Header = () => {

  const [isopenMenu, setopenMenu] = useState(false)

  const onhandleChange = () => {
    setopenMenu(!isopenMenu)
  }

  const closeMenu = () => {
    setopenMenu(false)
  }

  return (
    <section className='main-header'>
      <div className='upper-header flex justify-between px-10'>
        <span><Link target='blank' to="https://www.facebook.com/people/Aryavarta-Ayurveda/61558554261044/"><i className="ri-facebook-circle-fill"></i></Link></span>
        <p>Welcome To Aryavarta Ayurveda</p>
      </div>
      <div className='middle-header flex justify-between'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='header-icon flex items-center justify-center gap-10'>
          <p><a href="mailto:demo@gmail.com"><i className="ri-mail-send-line"></i> demo@gmail.com</a></p>
          <p><a href="tel:888 999 7773"><i className="ri-phone-fill"></i> 888 999 7773</a></p>
        </div>
      </div>
      <div className='down-header flex justify-between items-center'>
        <div className='logo_header logo'>
          <img src={logo} alt="logo" />
        </div>
        <nav className='navbar'>
          <ul className={`nav-links ${isopenMenu ? 'click' : ''} `}>
            <li><Link onClick={closeMenu} to="/">Home</Link></li>
            <li><Link onClick={closeMenu} to="/about_page">About Us</Link></li>
            <li><Link onClick={closeMenu} to="/product_page">Product</Link></li>
            <li><Link onClick={closeMenu} to="/testimonial">Testimonial</Link></li>
            <li><Link onClick={closeMenu} to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className='language'>
          <TranslateWidget />
        </div>
        <div className='responsive'>
          <i onClick={onhandleChange} className="ri-menu-3-line"></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
