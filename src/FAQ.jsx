import React, { Component } from 'react';
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Footer from "./Footer"
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
                    <img src = {FA} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "flex justify-center items-center mt-12">
                <div className = "flex justify-center items-center w-[50%]">
                    <div className = "md:text-[27px] text-[18px] font-[700] text-[#171A1FFF]">Frequently Asked Questions</div>
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

export default FAQ;