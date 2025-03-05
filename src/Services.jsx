import React, { Component } from 'react';
import Navbar from "./Navbar";
import Services1 from "./Images/Services1.png"
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import Logo from "./Images/Logo.png";
import Footer from "./Footer";
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

            <Footer />
        </div>
    )
  }
}

export default Services;