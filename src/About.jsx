import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            <header className = "pt-[26px] bg-[#f4f8f6] pb-[100px]">
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

            <div className = "bg-white w-full relative flex justify-center items-center pt-2 lg:pt-5">
                <div className = "bg-white p-7 w-[70%]">
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


            <div className = "relative bg-[#2C2C2CFF] py-6 flex justify-center lg:mt-24 mt-[80px] md:pb-52 pb-32">
                <div className = "relative">
                    <div className = "text-[32px] font-[700] text-[#FFFFFFFF]">Top Investment Platform</div>
                    <div className = "text-[12px] font-[400] text-[#939393FF] mx-[20%] mt-3">Experience a secure and intuitive investment platform built to empower smarter financial decisions and accelerate wealth growth.
                    </div>
                    <div className = "flex justify-center mt-12 mx-20">
                        <div className = "w-[80%] absolute h-full">
                            <img src = {About3} className = "object cover"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "w-full flex justify-center items-center relative mt-60">
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

            <div className = "mt-32 w-full relative flex justify-center">
                <div className = "lg:flex justify-center items-center w-[50%] gap-5">
                    <div className = "">
                        <div className = "text-[27px] font-[700] text-[#353535FF] lg:text-left ">Meet Our Expert 
                        Advisor
                        </div>
                        <div className = "text-[12px] font-[400] text-[#A3A3A3FF] text-left mt-3">Receive expert guidance from our seasoned financial advisor, equipped with deep industry expertise and strategic insights. Whether you seek tailored solutions, risk assessment, or informed decision-making support, our advisor is here to help you navigate the markets with confidence.</div>
                    </div>

                    <div className = "w-full flex justify-center mt-10">
                        <img src = {Image8} className = "object-cover"/>
                    </div>
                    <div className = "w-full flex justify-center mt-5">
                        <img src = {Image9} className = "object-cover"/>
                    </div>
                    
                </div>
            </div>

            <footer className = "w-full bg-[#EAEEECFF] pt-20 pb-10 hidden lg:block mt-28">
                            <div className = "flex justify-center">
                            <div className = "lg:flex gap-12 items-start md:mx-10">
                                <div className = "text-left">
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">About Company</div>
                                    <div className = "flex items-center mt-3 gap-2">
                                        <div className = "">
                                            <img src = {Location} className = "object-cover size-4"/>
                                        </div>
                                        <div className = "text-[10px] font-[400] text-[#818281FF]">30 Millbank, London, United Kingdom</div>
                                    </div>
                                    <div className = "flex items-center mt-3 gap-2">
                                        <div className = "">
                                            <img src = {Timer} className = "object-cover size-4"/>
                                        </div>
                                        <div className = "text-[10px] font-[400] text-[#818281FF]">Everyday Available 24/7</div>
                                    </div>
                                    <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-3 w-52">Empowering Security: Trusted, Regulated, and Fully Protected.</div>
                                </div>
            
                                <div className = "text-left">
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">Quick Links</div>
                                        <nav className="flex flex-col text-[12px] mt-3 gap-2 font-[400] text-[#171A1FFF]">
                                            <Link to="/">Home</Link>
                                            <Link to="/about">About</Link>
                                            <Link to="/services">Services</Link>
                                            <Link to="/platform">Platform</Link>
                                            <Link to="/contact">Contact</Link>
                                        </nav>
                                </div>
            
                                <div className = "text-left">
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">Support</div>
                                        <nav className="flex flex-col text-[12px] mt-3 gap-2 font-[400] text-[#171A1FFF]">
                                            <Link to="/privacy-policy">Privacy Policy</Link>
                                            <Link to="/terms">Terms & Conditions</Link>
                                            <Link to="/disclaimer">Disclaimer</Link>
                                            <Link to="/support">Support</Link>
                                            <Link to="/faq">FAQ</Link>
                                        </nav>
                                </div>
            
                                <div className = "text-left">
                                    <div className = "text-[16px] font-[700] text-[#171A1FFF]">Download App</div>
                                    <div className = "flex gap-8">
                                        <a href = "#">
                                            <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-2 gap-1">
                                                <div className = "-ml-2">
                                                    <img src = {Play} className = "object-cover"/>
                                                </div>
                                                <div className = "flex flex-col items-center">
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
                                                <div className = "flex flex-col items-center">
                                                    <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                                    <div className = "text-[9px] font-[400] text-[#353535FF]">App Store</div>
                                                </div>
                                            </div>
                                        </a>
            
                                        
                                    </div>
            
                                    <a href = "#">
                                        <div className="bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] py-2 px-[18px] gap-1">
                                                <div className = "-ml-2 flex justify-center">
                                                    <img src = {Surf} className = "object-cover size-6"/>
                                                </div>
                                                <div className = "flex flex-col items-center mt-2">
                                                    <div className = "text-[5px] font-[400] text-[#434443FF]">Surf on the</div>
                                                    <div className = "text-[9px] font-[400] text-[#353535FF]">Web Version</div>
                                                </div>
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                            </div>
            
                            <div className = "flex gap-10 items-center justify-center mt-10">
                                <div className = "flex md:gap-1 items-center -ml-12">
                                    <img src = {Logo} className = "w-[115px] h-[94px] -ml-10 md:-ml-0"/>   
                                    <div className = "text-[16px] text-[#171A1FFF] -ml-[30px] md:-ml-9 font-[400]">EXCHANGE LIGHT LIMITED</div>
                                </div>
                                <hr className = "lg:w-[20%] text-[#b2b4b8] hidden md:block"></hr>
                                <div className = "text-[11px] font-[400] text-[#878888FF]">Copyright © 2025. All rights reserved</div>
                            </div>
                        
                        </footer>
                        
                        <footer className = "w-full bg-[#EAEEECFF] pt-20 pb-10 lg:hidden md:block hidden mt-16">
                            <div className = "md:flex justify-center gap-10 mx-12 md:mx-0">
                                <div className = "md:mx-10">
                                    <div className = "text-left">
                                        <div className = "text-[12px] font-[700] text-[#171A1FFF]">About Company</div>
                                        <div className = "flex items-center mt-3 gap-2">
                                            <div className = "">
                                                <img src = {Location} className = "object-cover size-4"/>
                                            </div>
                                            <div className = "text-[10px] font-[400] text-[#818281FF]">30 Millbank, London, United Kingdom</div>
                                        </div>
                                        <div className = "flex items-center mt-3 gap-2">
                                            <div className = "">
                                                <img src = {Timer} className = "object-cover size-4"/>
                                            </div>
                                            <div className = "text-[10px] font-[400] text-[#818281FF]">Everyday Available 24/7</div>
                                        </div>
                                        <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-3 w-52">Empowering Security: Trusted, Regulated, and Fully Protected.</div>
                                    </div>
            
                                    <div className = "text-left mt-[82px]">
                                        <div className = "text-[12px] font-[700] text-[#171A1FFF]">Quick Links</div>
                                            <nav className="flex flex-col text-[12px] mt-3 gap-2 font-[400] text-[#171A1FFF]">
                                                <Link to="/">Home</Link>
                                                <Link to="/about">About</Link>
                                                <Link to="/services">Services</Link>
                                                <Link to="/platform">Platform</Link>
                                                <Link to="/contact">Contact</Link>
                                            </nav>
                                    </div>
                                </div>
            
                                <div className = "md:mx-10">
            
                                    <div className = "text-left">
                                        <div className = "text-[12px] font-[700] text-[#171A1FFF]">Support</div>
                                            <nav className="flex flex-col text-[12px] mt-3 gap-2 font-[400] text-[#171A1FFF]">
                                                <Link to="/privacy-policy">Privacy Policy</Link>
                                                <Link to="/terms">Terms & Conditions</Link>
                                                <Link to="/disclaimer">Disclaimer</Link>
                                                <Link to="/support">Support</Link>
                                                <Link to="/faq">FAQ</Link>
                                            </nav>
                                    </div>
            
                                    <div className = "text-left mt-14">
                                        <div className = "text-[16px] font-[700] text-[#171A1FFF]">Download App</div>
            
                                            <a href = "#">
                                                <div className = "flex gap-8">
                                                    <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-4 py-1 gap-1">
                                                        <div className = "-ml-2">
                                                            <img src = {Play} className = "object-cover"/>
                                                        </div>
                                                        <div className = "flex flex-col items-center">
                                                            <div className = "text-[5px] font-[400] text-[#FFFFFFFF]">GET IT ON</div>
                                                            <div className = "text-[9px] font-[400] text-[#FFFFFFFF]">Google Play</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
            
                                            <a href = "#">
                                                <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-4 gap-1 py-2">
                                                        <div className = "-ml-2">
                                                            <img src = {Apple} className = "object-cover size-6"/>
                                                        </div>
                                                        <div className = "flex flex-col items-center">
                                                            <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                                            <div className = "text-[9px] font-[400] text-[#353535FF]">App Store</div>
                                                        </div>
                                                </div>
                                            </a>
            
                                            <a href = "#">
                                                <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] py-2 px-[18px] gap-1 w-max">
                                                        <div className = "-ml-2">
                                                            <img src = {Surf} className = "object-cover size-6"/>
                                                        </div>
                                                        <div className = "flex flex-col items-center">
                                                            <div className = "text-[5px] font-[400] text-[#434443FF]">Surf on the</div>
                                                            <div className = "text-[9px] font-[400] text-[#353535FF]">Web Version</div>
                                                        </div>
                                                </div>
                                            </a>
            
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className = "flex justify-center mt-10 mx-10">
                                    <div className = "flex gap-10 items-center justify-center ">
                                        <div className = "flex md:gap-1 items-center">
                                            <img src = {Logo} className = "w-[115px] h-[94px]"/>   
                                            <div className = "text-[16px] text-[#171A1FFF] -ml-[30px] md:-ml-9 font-[400]">EXCHANGE LIGHT LIMITED</div>
                                        </div>
                                        <div className = "text-[11px] font-[400] text-[#878888FF]">Copyright © 2025. All rights reserved</div>
                                    </div>
                                </div>
                                            
                        </footer>
            
                        <footer className = "w-full bg-[#EAEEECFF] pt-20 pb-10 md:hidden block mt-16">
                            <div className = "flex justify-center">
                                <div className = "flex flex-col justify-center items-center">
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">About Company</div>
            
                                    <div className = "flex flex-col justify-center items-center">
                                        <div className = "flex items-center mt-3 gap-2">
                                            <div className = "">
                                                <img src = {Location} className = "object-cover size-4"/>
                                            </div>
                                            <div className = "text-[10px] font-[400] text-[#818281FF]">30 Millbank, London, United Kingdom</div>
                                        </div>
            
                                        <div className = "flex items-center mt-3 gap-2">
                                            <div className = "">
                                                <img src = {Timer} className = "object-cover size-4"/>
                                            </div>
                                            <div className = "text-[10px] font-[400] text-[#818281FF]">Everyday Available 24/7</div>
                                        </div>
                                    </div>
                                        
                                    <div className = "text-[10px]  font-[400] text-[#171A1FFF] mt-5 w-52">Empowering Security: Trusted, Regulated, and Fully Protected.
                                    </div>
                                
                                    <div className = "flex justify-center items-start gap-10 mt-[44px] ">
                                        <div className = "">
                                            <div className = "text-[12px] font-[700] text-[#171A1FFF]">Quick Links</div>
                                                <nav className="flex flex-col text-[12px] mt-3 gap-2  font-[400] text-[#171A1FFF]">
                                                    <Link to="/">Home</Link>
                                                    <Link to="/about">About</Link>
                                                    <Link to="/services">Services</Link>
                                                    <Link to="/platform">Platform</Link>
                                                    <Link to="/contact">Contact</Link>
                                                </nav>
                                        </div>
                                    </div>
            
                                    <div className = "flex justify-center gap-10 mt-[44px] ">
                                        <div className = "">
                                            <div className = "text-[12px] font-[700] text-[#171A1FFF] ">Support</div>
                                            <nav className="flex flex-col text-[12px] mt-3 gap-2 font-[400] text-[#171A1FFF]">
                                                <Link to="/privacy-policy">Privacy Policy</Link>
                                                <Link to="/terms">Terms & Conditions</Link>
                                                <Link to="/disclaimer">Disclaimer</Link>
                                                <Link to="/support">Support</Link>
                                                <Link to="/faq">FAQ</Link>
                                            </nav>
                                        </div>
                                    </div>
            
                                    <div className = "mt-[14px] flex justify-center px-5">
                                        <div className = "text-left mt-14 flex flex-col justify-center items-center">
                                            <div className = "text-[16px] font-[700] text-[#171A1FFF]">Download App</div>
                                            <div className = " gap-3">
                                                <a href = "#">
                                                    <div className = "flex gap-8">
                                                        <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-4 py-1 gap-1">
                                                            <div className = "-ml-2">
                                                                <img src = {Play} className = "object-cover"/>
                                                            </div>
                                                            <div className = "flex flex-col items-center">
                                                                <div className = "text-[5px] font-[400] text-[#FFFFFFFF]">GET IT ON</div>
                                                                <div className = "text-[9px] font-[400] text-[#FFFFFFFF]">Google Play</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
            
                                                <a href = "#">
                                                    <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-4 gap-1 py-2">
                                                            <div className = "-ml-2">
                                                                <img src = {Apple} className = "object-cover size-6"/>
                                                            </div>
                                                            <div className = "flex flex-col items-center">
                                                                <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                                                <div className = "text-[9px] font-[400] text-[#353535FF]">App Store</div>
                                                            </div>
                                                    </div>
                                                </a>
            
                                                <a href = "#">
                                                    <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] py-2 px-[18px] gap-1 w-max">
                                                            <div className = "-ml-2">
                                                                <img src = {Surf} className = "object-cover size-6"/>
                                                            </div>
                                                            <div className = "flex flex-col items-center">
                                                                <div className = "text-[5px] font-[400] text-[#434443FF]">Surf on the</div>
                                                                <div className = "text-[9px] font-[400] text-[#353535FF]">Web Version</div>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className = "flex justify-center mt-10 px-10">
                                <div className = "flex gap-5 items-center justify-center -ml-10">
                                    <div className = "flex md:gap-1 items-center">
                                        <img src = {Logo} className = "w-[115px] h-[94px]"/>   
                                        <div className = "text-[12px] text-[#171A1FFF] -ml-[30px] md:-ml-9 font-[400]">EXCHANGE LIGHT LIMITED</div>
                                    </div>
                                    <div className = "text-[11px] font-[400] text-[#878888FF]">Copyright © 2025. All rights reserved</div>
                                </div>
                            </div>
                        
                        </footer>
            
        </div>
    )
  }
}

export default About;