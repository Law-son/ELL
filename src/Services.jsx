import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Services1 from "./Images/Services1.png"
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import Logo from "./Images/Logo.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";
import Image2 from "./Images/Image2.png";
import Image3 from "./Images/Image3.png";
import Image4 from "./Images/Image4.png";
import Image5 from "./Images/Image5.png";
import Image6 from "./Images/Image6.png";
import Button from "./Images/Button.png";
import Button2 from "./Images/Button2.png";
import Button3 from "./Images/Button3.png";
import Button4 from "./Images/Button4.png";
import Button5 from "./Images/Button5.png";
import Button6 from "./Images/Button6.png";


export class Services extends Component {

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
                    <img src = {Services1} className = "object-cover"/>
                </div>
                
            </header>


            <div className = "relative flex justify-center mt-24">
                <div className = "md:w-[70%] w-[80%] lg:w-[50%]">

                    <div className = "lg:text-[40px] text-[28px] font-[700] text-[#171A1FFF]">The Best Service We Offer</div>
                    <div className = "text-[12px] font-[400] text-[#A3A3A3FF] mt-3 lg:mx-32 md:mx-16">We deliver unmatched quality and tailored solutions, ensuring every experience exceeds your expectations.</div>

                    <div className = "flex justify-center mt-16">
                        <div className = "lg:flex justify-baseline gap-2">
                            <div className = "bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7">
                                <div className = "flex justify-center">
                                    <img src = {Button}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#393939FF] mt-5">Financial Trading</div>
                                <div className = "text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Real-time market data and powerful analytics enable strategic decision-making on a variety of stocks, currency, and commodities.
                                </div>
                            </div>
                            <div className = "bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0">
                                <div className = "flex justify-center">
                                    <img src = {Button2}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#393939FF] mt-5">Manage Risk</div>
                                <div className = "text-[12px] font-[400] text-[#8A8A8AFF] mt-4">In volatile markets, safeguard your investments and optimize returns with cutting-edge financial tools and risk management.
                                </div>
                            </div>
                            <div className = "bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0">
                                <div className = "flex justify-center">
                                    <img src = {Button3}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#393939FF] mt-5">Trading Psychology</div>
                                <div className = "text-[12px] font-[400] text-[#8A8A8AFF] mt-4">In stressful markets, professional trading psychology helps you stay calm, control emotions, and make sensible, data-driven judgments.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "flex justify-center mt-5">
                        <div className = "lg:flex justify-baseline gap-2">
                            <div className = "bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0">
                                <div className = "flex justify-center">
                                    <img src = {Button4}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#393939FF] mt-5">Safe Account</div>
                                <div className = "text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Ideal for those who choose risk-managed investing and capital preservation over aggressive growth.
                                </div>
                            </div>
                            <div className = "bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0">
                                <div className = "flex justify-center">
                                    <img src = {Button5}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#393939FF] mt-5">Data Privacy</div>
                                <div className = "text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Always trust our strong data security protocols and modern encryption to protect your personal and financial data.
                                </div>
                            </div>
                            <div className = "bg-[#00BD6FFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0">
                                <div className = "flex justify-center">
                                    <img src = {Button6}/>
                                </div>
                                <div className = "text-[14px] font-[400] text-[#FDFCFDFF] mt-5">Customer Support</div>
                                <div className = "text-[12px] font-[400] text-[#C8F1E0FF] mt-4">Our committed support team provides rapid, reliable answers to your questions and issues anytime.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className = "mt-24 w-full flex justify-center mb-24">
                <div className = "lg:w-[50%] w-[70%] items-center bg-[] rounded-[2px] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] bg-[linear-gradient(180deg,#303532_26.68%,#2B2B2B_66.61%)] border-[1px] border-[#B6B6B6FF] py-24 px-12">
                    <div className = "">
                        <div className = "text-[27px] font-[700] text-[#FFFFFF]">Start your crypto journey</div>
                    </div>
                    <div className = "mt-5">
                        <div className = "text-[14px] font-[400] text-[#FFFFFF]">Explore, Invest, and Grow in the World of Digital Assets</div>
                    </div>
                </div>
            </div>

            <div className = "mt-32 flex justify-center">
                <div className = "flex justify-center items-center w-[70%] gap-12">
                    <div className = "w-full lg:block hidden">
                        <img src = {Image2} className = ""/>
                    </div>
                    <div className = "text-left">
                        <div className = "lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#333333FF]">Find Stocks According To Your Criteria</div>
                        <div className = "text-[11px] font-[400] text-[#878787FF] mt-3">Effortlessly analyze and filter stocks based on your investment criteria, leveraging advanced financial metrics for informed, data-driven decisions.</div>

                        <div className = "flex items-center mt-7 gap-10">
                            <img src = {Image3} className = "object-cover size-14"/>
                            <div className = "">
                                <div className = "text-[15px] font-[700] text-[#3B3B3BFF]">Choose Your Stock</div>
                                <div className = "text-[11px] font-[400] text-[#878787FF]">Use market insights to identify stocks that match your investment goals and risk tolerance.</div>
                            </div>
                        </div>

                        <div className = "bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                        <div className = "flex items-center gap-10">
                            <img src = {Image4} className = "object-cover size-14"/>
                            <div className = "">
                                <div className = "text-[15px] font-[700] text-[#3B3B3BFF]">Detailed Comparison</div>
                                <div className = "text-[11px] font-[400] text-[#878787FF]">Use detailed financial information to confidently compare stocks and make strategic investing decisions.</div>
                            </div>
                        </div>

                        <div className = "bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                        <div className = "flex items-center gap-10">
                            <img src = {Image5} className = "object-cover size-14"/>
                            <div className = "">
                                <div className = "text-[15px] font-[700] text-[#3B3B3BFF]">Buy Your Shares</div>
                                <div className = "text-[11px] font-[400] text-[#878787FF]">Seamlessly acquire stocks through a secure, streamlined process, ensuring effortless and convenient investing.</div>
                            </div>
                        </div>

                        <div className = "bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                        <div className = "flex items-center gap-10">
                            <img src = {Image6} className = "object-cover size-14"/>
                            <div className = "">
                                <div className = "text-[15px] font-[700] text-[#3B3B3BFF]">Sell Anytime</div>
                                <div className = "text-[11px] font-[400] text-[#878787FF]">We make it easy to sell your shares at any moment, giving you maximum freedom and control over your investments.</div>
                            </div>
                        </div>

                        <div className = "w-full lg:hidden mt-16">
                            <img src = {Image2} className = "w-full"/>
                        </div>

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

export default Services;