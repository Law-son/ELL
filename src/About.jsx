import React, { Component } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import About1 from "./Images/About1.png"
import About2 from "./Images/About2.png"
import About3 from "./Images/About3.png"
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import Logo from "./Images/Logo.png";
import Done from "./Images/Done.png";
import Image8 from "./Images/Image8.png";
import Image9 from "./Images/Image9.png";
import Image10 from "./Images/Image10.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";


export class About extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

    }

  render() {
    return (
        <div>
            <header className = "pt-[26px] bg-[#f4f8f6] pb-[70px] md:pb-[100px]">
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
                    <img src = {About1} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "bg-white w-full relative flex justify-center items-center md:pt-2 lg:pt-5">
                <div className = "bg-white p-7 md:w-[80%] w-[90%] lg:w-[70%]">
                    <div className = "lg:flex justify-center items-center gap-10 mt-16">
                        <div className = "flex flex-col justify-center text-left">
                            <div className = "md:text-[31px] text-[20px] font-[700] text-[#313131FF] text-center lg:text-left">Achieving #1 in Investment Needs.</div>

                            <div className = "text-[11px] font-[400] text-[#838383FF] md:mt-1 mt-3">Aim to be your premier investment partner by providing expert guidance, strategic solutions, and personalized strategies designed for long-term financial success.
                            </div>

                            <div className = "flex justify-start md:gap-[69px] gap-[60px] items-center mt-2">
                                <div className = "flex gap-2">
                                    <div className = "">
                                        <img src = {Done} className = "object-cover size-4"/>
                                    </div>
                                    <div className = "text-[12px] font-[400] text-[#9A9A9AFF]">Expert Advisor</div>
                                </div>
                                <div className = "flex gap-2">
                                    <div className = "">
                                        <img src = {Done} className = "object-cover size-4"/>
                                    </div>
                                    <div className = "text-[12px] font-[400] text-[#9A9A9AFF]">Technical Analysis</div>
                                </div>
                            </div>
                            <div className = "flex justify-start md:gap-10 gap-[31px] items-center mt-2">
                                <div className = "flex gap-2">
                                    <div className = "">
                                        <img src = {Done} className = "object-cover size-4"/>
                                    </div>
                                    <div className = "text-[12px] font-[400] text-[#9A9A9AFF]">100% Success Rate</div>
                                </div>
                                <div className = "flex gap-2">
                                    <div className = "">
                                        <img src = {Done} className = "object-cover size-4"/>
                                    </div>
                                    <div className = "text-[12px] font-[400] text-[#9A9A9AFF]">Free Consultation</div>
                                </div>
                            </div>

                            <div className = "text-[14px] font-[700] text-[#373737FF] mt-7 text-left lg:mt-8">Who We Are</div>

                            <div className = "text-[11px] font-[400] text-[#838383FF] mt-1">We are an innovative brokerage firm committed to providing user-friendly and advanced trading services.
                            </div>

                            <div className = "text-[14px] font-[700] text-[#373737FF] mt-7 lg:mt-8 text-left">What We Do</div>

                            <div className = "text-[11px] font-[400] text-[#838383FF] mt-1">As a professional Forex trading platform, we provide many financial services. We assist Forex traders grow sustainably with cutting-edge technology, a secure trading environment, and global market access, versatile trading tools, and high-quality customer service.
                            </div>
                        </div>

                        <div className = "lg:w-[200%] w-full mt-20 lg:mt-0 flex justify-center items-center">
                            <img src = {About2} className = "object-cover"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className = "relative bg-[#2C2C2CFF] py-6 flex justify-center lg:mt-24 mt-[80px] md:pb-[300px] lg:pb-[400px] pb-48">
                <div className = "relative">
                    <div className = "text-[32px] font-[700] text-[#FFFFFFFF]">Top Investment Platform</div>
                    <div className = "text-[12px] font-[400] text-[#939393FF] mx-[20%] mt-3">Experience a secure and intuitive investment platform built to empower smarter financial decisions and accelerate wealth growth.
                    </div>
                </div>
            </div>

            <div className = "flex justify-center w-full relative">
                <div className = "flex flex-col w-[80%] md:w-[70%] absolute -top-48 md:-top-68 lg:-top-96">

                    <div className = "flex justify-center mt-12 ">
                        <div className = "w-[92%] absolute h-full">
                            <img src = {About3} className = "object-cover w-full"/>
                        </div>
                    </div>


                    <div className = "w-full flex justify-center items-center relative md:mt-[400px] lg:mt-[600px] mt-[270px]">
                        <div className = "w-[92%] lg:flex justify-center items-center gap-10 bg-[#EAEEECFF] md:p-20 p-5">
                            <div className = "w-full flex justify-center">
                                <img src = {Image10} className = "object cover"/>
                            </div>

                            <div className = "text-left mt-5 lg:mt-0">
                                <div className = "text-[16px] font-[700] text-[#171A1FFF] text-center lg:text-left">Download App</div>

                                <div className = "text-[12px] font-[400] text-[#A3A3A3FF] text-center lg:text-left mt-2">Stay informed with real-time market updates and the latest financial insights.</div>

                                <div className = "flex justify-center">
                                    <div className = "flex gap-4 mt-3 w-full">
                                        <a href = "https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5" className = "md:w-[100%] w-full">
                                            <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-2 gap-1 md:w-[100%] w-full py-1 justify-center ">
                                                <div className = "-ml-2">
                                                    <img src = {Play} className = "object-cover"/>
                                                </div>
                                                <div className = "flex flex-col items-center text-center">
                                                    <div className = "text-[5px] font-[400] text-[#FFFFFFFF]">GET IT ON</div>
                                                    <div className = "text-[9px] font-[400] text-[#FFFFFFFF]">Google Play</div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href = "https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5" className = "md:w-[100%] w-full">
                                            <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] justify-center mt-3 items-center rounded-[2px] px-2 gap-1  py-1">
                                                <div className = "-ml-2">
                                                    <img src = {Apple} className = "object-cover"/>
                                                </div>
                                                <div className = "flex flex-col items-center text-center">
                                                    <div className = "text-[5px] font-[400] text-[#434443FF]">Download On the</div>
                                                    <div className = "text-[9px] font-[400] text-[#434443FF]">App Store</div>
                                                </div>
                                            </div>
                                        </a>


                                    </div>
                                </div>

                                <a href = "https://www.exchangelight.net/">
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

                    <div className = "md:mt-32 mt-24 w-full relative flex justify-center">
                        <div className = "lg:flex justify-center items-center w-[92%] gap-10">
                            <div className = "lg:w-[50%]">
                                <div className = "text-[27px] font-[700] text-[#353535FF] lg:text-left ">Meet Our Expert 
                                Advisor
                                </div>
                                <div className = "text-[12px] font-[400] text-[#A3A3A3FF] text-left mt-3">Receive expert guidance from our seasoned financial advisor, equipped with deep industry expertise and strategic insights. Whether you seek tailored solutions, risk assessment, or informed decision-making support, our advisor is here to help you navigate the markets with confidence.</div>
                            </div>

                            <div className = "lg:flex items-start w-full gap-4">
                                <div className = "w-full flex justify-center mt-10 lg:mt-5 lg:w-[300%]">
                                    <img src = {Image8} className = "object-cover"/>
                                </div>
                                <div className = "w-full flex justify-center mt-5 lg:w-[300%]">
                                    <img src = {Image9} className = "object-cover"/>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>

            <div className = "relative mt-[1550px] md:mt-[1750px] lg:mt-[1200px]"></div>

            <Footer className = "relative"/>
            
        </div>
    )
  }
}

export default About;