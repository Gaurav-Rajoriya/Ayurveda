import React from "react";
import whatsapp from "../Assets/whatsapp_4494495.png";
import phone from "../Assets/telephone_7044607.png";


const Whatsapp = () => {
    return (
        <section className="whatsapp-section flex w-full px-2 items-center justify-center fixed z-[9999] bottom-3 left-0 ">
            <div className="whatsapp-container w-full flex justify-between items-center">
                <div className="whatsapp-img w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=917069959787">
                        <img src={whatsapp} alt="whatsapp" />
                    </a>
                </div>
                <div className="phone-img w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                    <a href="tel:888 999 7779">
                        <img src={phone} alt="phone" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Whatsapp;
