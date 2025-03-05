import React, { Component } from 'react';
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Footer from "./Footer";
import Surf from "./Images/Surf.png";
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import P1 from "./Images/P1.png";
import Image10 from "./Images/Image10.png";
import Forex from "./Images/Forex.png";
import Crypto from "./Images/Crypto.png";
import Indicies from "./Images/Indicies.png";
import Como from "./Images/Como.png";

export class Platform extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

    }

  render() {
    return (
        <div>
            <header className = "pt-[26px] bg-[#f4f8f6] md:pb-[100px]">
                <div className = "md:flex items-center justify-center text-[#818281FF] md:gap-10 gap-5 text-[10px]">
                                    <div className = "flex gap-2 items-center justify-center">
                                        <img src = {Timer} className = "text-[#1DD75BFF] size-4"/>
                                        <div className = "">Everyday Available 24/7</div>
                                    </div>
                                    <div className = "flex gap-2 items-center justify-center mt-2 md:mt-0">
                                        <img src = {Location} className = "text-[#1DD75BFF] size-4"/>
                                        <div className = "">30 Millbank, London, United Kingdom</div>
                                    </div>
                                </div>

                <div className = "flex gap-3 items-center justify-center md:-mt-4 -mt-2">
                    <div className = "flex md:gap-1 items-center">
                        <img src = {Logo} className = "w-[115px] h-[94px] -ml-10 md:-ml-0"/>   
                        <div className = "text-[16px] text-[#171A1FFF] -ml-[30px] md:-ml-9 font-[400]">EXCHANGE LIGHT LIMITED</div>
                    </div>
                    <hr className = "lg:w-[50%] md:w-[40%] text-[#DEE1E6FF] hidden md:block"></hr>
                </div>

                <div className = "flex items-center justify-center md:-mt-8 -mt-5">
                    <Navbar/>
                </div>

                <div className = "flex justify-center mt-16">
                    <img src = {P1} className = "object-cover"/>
                </div>
                
            </header>


            <div className = "flex justify-center mt-16">
                <div className = "f">
                    <div className = "lg:text-[40px] text-[28px] font-[700] text-[#171A1FFF]">Trade Crypto with Exchange Light</div>
                    <div className = "text-[12px] font-[400] text-[#A3A3A3FF] mt-3 lg:mx-32 md:mx-16">Trade Bitcoin, Ethereum, USDT, XRP, Dogecoin and more at Exchange Light</div>
                </div>
            </div>

            <div className = "w-full flex justify-center items-center relative mt-20">
                <div className = "w-[70%] md:w-[50%] lg:flex justify-center items-center gap-10 bg-[#EAEEECFF] md:p-20 p-5">
                    <div className = "w-full">
                        <img src = {Image10} className = "object cover"/>
                    </div>

                    <div className = "text-left mt-5 lg:mt-0">
                        <div className = "text-[16px] font-[700] text-[#171A1FFF] text-center lg:text-left">Download App</div>

                        <div className = "text-[12px] font-[400] text-[#A3A3A3FF] text-left mt-2">Stay informed with real-time market updates and the latest financial insights.</div>

                        <div className = "flex justify-center">
                            <div className = "flex gap-4 mt-1">
                                <a href = "#">
                                    <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-2 gap-1">
                                        <div className = "-ml-2">
                                            <img src = {Play} className = "object-cover"/>
                                        </div>
                                        <div className = "flex flex-col items-center text-center">
                                            <div className = "text-[5px] font-[400] text-[#FFFFFFFF]">GET IT ON</div>
                                            <div className = "text-[9px] font-[400] text-[#FFFFFFFF]">Google Play</div>
                                        </div>
                                    </div>
                                </a>

                                <a href = "#">
                                    <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-4 gap-1  py-[5.2px]">
                                        <div className = "-ml-2">
                                            <img src = {Apple} className = "object-cover size-6"/>
                                        </div>
                                        <div className = "flex flex-col items-center text-center">
                                            <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                            <div className = "text-[9px] font-[400] text-[#353535FF]">App Store</div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>

                        <a href = "#">
                            <div className=" bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] py-2 px-[18px]">
                                    <div className = "flex justify-center">
                                        <img src = {Surf} className = "object-cover size-6"/>
                                    </div>
                                    <div className = "flex flex-col items-center text-center justify-center mt-3">
                                        <div className = "text-[5px] font-[400] text-[#434443FF]">Surf on the</div>
                                        <div className = "text-[9px] font-[400] text-[#353535FF]">Web Version</div>
                                    </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>


            <div className = "flex justify-center mt-16">
                <div className = "f">
                    <div className = "lg:text-[40px] text-[28px] font-[700] text-[#171A1FFF]">Products in the market</div>
                    <div className = "text-[12px] font-[700] text-[#171A1FFF] lg:flex mt-14 gap-4">
                        <div className = "flex flex-col justify-center">
                            <div className = "">Forex</div>
                            <div className = "w-full mt-3 flex justify-center">
                                <img src = {Forex} className = "object-cover"/>
                            </div>
                        </div>
                        <div className = "flex flex-col justify-center mt-5 lg:mt-0">
                            <div className = "">Crypto</div>
                            <div className = "w-full mt-3 flex justify-center">
                                <img src = {Crypto} className = "object-cover"/>
                            </div>
                        </div>
                        <div className = "flex flex-col justify-center mt-5 lg:mt-0">
                            <div className = "">Indicies</div>
                            <div className = "w-full mt-3 flex justify-center">
                                <img src = {Indicies} className = "object-cover"/>
                            </div>
                        </div>
                        <div className = "flex flex-col justify-center mt-5 lg:mt-0">
                            <div className = "">Comodities</div>
                            <div className = "w-full mt-3 flex justify-center">
                                <img src = {Como} className = "object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className = "mt-24 w-full flex justify-center mb-24">
                <div className = "lg:w-[50%] w-[70%] items-center bg-[] rounded-[2px] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] bg-[linear-gradient(180deg,#303532_26.68%,#2B2B2B_66.61%)] border-[1px] border-[#B6B6B6FF] py-24 md:px-12 px-5">
                    <div className = "">
                        <div className = "text-[27px] font-[700] text-[#FFFFFF]">Start your crypto journey</div>
                    </div>
                    <div className = "mt-5">
                        <div className = "text-[14px] font-[400] text-[#FFFFFF]">Explore, Invest, and Grow in the World of Digital Assets</div>
                    </div>
                </div>
            </div>
            

            <Footer />
            
        </div>
    )
  }
}

export default Platform;