import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "./Images/Logo.png";
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import D1 from "./Images/Disclaimer.png";
import D2 from "./Images/Disclaimer2.png";

export class Disclaimer extends Component {

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
                    <img src = {D1} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "w-full mt-12 flex justify-center">
                <div className = "lg:w-[50%] md:w-[70%] w-[80%] flex justify-center">
                    <div className = "">
                        <div className = "w-full">
                            <img src = {D2} className = ""/>
                        </div>
                        <div className = "lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#171A1FFF] mt-10">Disclaimer
                        </div>
                        <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-10 text-left">
                            <div className = "">Last Updated: Feb 28th, 2025</div>

                            <div className = "font-[700] mt-5">General Disclaimer</div>
                            <div className = "mt-3">The information provided on Exchange Light Limited ("Website") is for general informational and educational purposes only. While we strive to ensure the accuracy and reliability of the content, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is strictly at your own risk.
                            </div>


                            <div className = "font-[700] mt-5">Financial Disclaimer</div>
                            <div className = "mt-3">The content on this Website does not constitute financial, investment, legal, or professional advice. Cryptocurrency, binary options, and other financial instruments carry a high level of risk and may not be suitable for all investors. The value of digital assets can be highly volatile, and you could lose more than your initial investment. Always conduct your own research and consult with a qualified financial advisor before making any financial decisions.
                            </div>


                            <div className = "font-[700] mt-5">No Liability</div>
                            <div className = "mt-3">Under no circumstances shall Exchange Light Limited, its owners, affiliates, partners, employees, or agents be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or inability to use, the Website or its content. This includes, but is not limited to, losses resulting from investment decisions, website errors, technical failures, or third-party services.
                            </div>
                            

                            <div className = "font-[700] mt-5">External Links Disclaimer</div>
                            <div className = "mt-3">We make no warranties regarding the Website’s availability, accuracy, or reliability. The content is provided "as is" and "as available" without any warranties of any kind, either express or implied.
                            </div>


                            <div className = "font-[700] mt-5">User Responsibility</div>
                            <div className = "mt-3">By using this Website, you acknowledge that it is your responsibility to evaluate the risks associated with any financial decisions and that you assume full responsibility for any outcomes resulting from the use of the information provided here.
                            </div>


                            <div className = "font-[700] mt-5">Changes to this Disclaimer</div>
                            <div className = "mt-3">We reserve the right to modify this Disclaimer Policy at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after any modifications constitute acceptance of the updated terms.
                            </div>


                            <div className = "font-[700] mt-5"> Privacy Policy</div>
                            <div className = "mt-3">Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your data.
                            </div>



                            <div className = "font-[700] mt-5"> Changes to Terms and Conditions</div>
                            <div className = "mt-3">We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Your continued use of our website after updates constitutes acceptance of the revised terms.
                            </div>
                            
                            

                        </div>
                    </div>
            </div>

            </div>

           <Footer />
            
        </div>
    )
  }
}

export default Disclaimer;