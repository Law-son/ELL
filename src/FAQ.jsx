import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import FA from "./Images/FA.png";
import Arrow from "./Images/Arrow.png";

const faqs = [
  { question: "What cryptocurrencies are available for trading on the platform?", answer: "Our platform supports trading of major cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), and various altcoins. A full list of supported digital assets can be found in the trading section." },
  { question: "How can I open an account and deposit funds?", answer: "To create an account, simply complete the registration process and verify your identity (KYC). Deposits can be made through bank transfers, stablecoins, or other supported payment methods, ensuring seamless fund allocation to your trading portfolio." },
  { question: "What are the withdrawal policies and limits?", answer: "Withdrawals require identity verification (KYC) for security purposes. Minimum and maximum withdrawal thresholds apply, depending on the asset and transaction volume. Processing times vary based on network congestion and security protocols." },
  { question: "How does the platform ensure fund security and risk management?", answer: "We implement multi-layer security measures, including two-factor authentication (2FA), cold storage for digital assets, and encryption protocols to mitigate cybersecurity risks. Additionally, our platform employs risk management tools to enhance trading safety." },
  { question: "What investment opportunities are available besides trading?", answer: "What investment opportunities are available besides trading?" },
];

export class FAQ extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         openIndex: null,
      }

    }

    toggleFAQ = (index) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };


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
                    <img src = {FA} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "flex justify-center items-center mt-12">
                <div className = "flex justify-center items-center w-[50%]">
                    <div className = "text-[27px] font-[700] text-[#171A1FFF]">Frequently Asked Questions</div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto my-10">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <div
            className={`flex justify-between items-center p-4 border border-[#E4E4E4FF] rounded-[2px] cursor-pointer transition-all duration-100 ${this.state.openIndex === index ? 'bg-[#10BA74FF]' : 'bg-white'}`}
            onClick={() => this.toggleFAQ(index)}
          >
            <span className="text-[12px] font-[400] text-[#171A1FFF]">{faq.question}</span>
            <img src={Arrow} alt="Toggle" className="w-5 h-5" />
          </div>
          {this.state.openIndex === index && (
            <div className="p-4 border border-[#E4E4E4FF] rounded-[2px] bg-white mt-1">
              <p className="text-[12px] font-[400] text-[#171A1FFF]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
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

export default FAQ;