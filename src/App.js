import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Whatsapp from "./Component/Whatsapp/Whatsapp";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Product_Page from "./Component/Product/Product_Page";
import About_Page from "./Component/About/About_Page";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product_page" element={<Product_Page/>}/>
        <Route path="/about_page" element={<About_Page/>}/>
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
