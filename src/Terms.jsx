import React, { Component } from 'react';
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Footer from "./Footer";
import Timer from "./Images/Timer.png";
import TC from "./Images/TC.png";
import TC1 from "./Images/TC1.png";
import Location from "./Images/Location.png";

export class Terms extends Component {

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
                    <img src = {TC} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "w-full mt-12 flex justify-center">
                <div className = "md:w-[70%] w-[80%] lg:w-[50%] flex justify-center">
                    <div className = "">
                        <div className = "w-full">
                            <img src = {TC1} className = ""/>
                        </div>
                        <div className = "lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#171A1FFF] mt-10">Terms & Conditions
                        </div>
                        <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-10 text-left">
                            <div className = "">Last Updated: March 1st, 2025</div>

                            <div className = "font-[700] mt-5">Introduction</div>
                            <div className = "mt-3">Welcome to Exchange Light Limited ("Company", "we", "our", or "us"). These Terms and Conditions govern your use of our website [Website URL] and services. By accessing or using our website, you agree to comply with these terms. If you do not agree with any part of these terms, you must not use our website.
                            </div>


                            <div className = "font-[700] mt-5">Eligibility</div>
                            <div className = "mt-3">To use our services, you must be at least 18 years old and have the legal capacity to enter into a binding agreement. By using our services, you confirm that you meet these eligibility requirements.
                            </div>


                            <div className = "font-[700] mt-5">Use of Website and Services</div>
                            <div className = "mt-3">You agree to use our website and services only for lawful purposes and in compliance with all applicable laws and regulations.You may not engage in any activity that disrupts or interferes with the operation of the website.Unauthorized access, data scraping, or reverse engineering of our website is strictly prohibited.
                            </div>
                            

                            <div className = "font-[700] mt-5">Account Registration and Security</div>
                            <div className = "mt-3">If you create an account, you are responsible for maintaining its confidentiality and security.You agree to provide accurate and complete information when registering.We reserve the right to suspend or terminate accounts that violate these terms.
                            </div>


                            <div className = "font-[700] mt-5">Intellectual Property</div>
                            <div className = "mt-3">All content on our website, including text, graphics, logos, and software, is the property of Exchange Light Limited and is protected by intellectual property laws.You may not copy, distribute, or reproduce our content without prior written permission.
                            </div>


                            <div className = "font-[700] mt-5">Disclaimers and Limitation of Liability</div>
                            <div className = "mt-3">Our website and services are provided "as is" and "as available" without warranties of any kind.We do not guarantee the accuracy, reliability, or completeness of any content.To the maximum extent permitted by law, we disclaim all liability for any damages resulting from the use of our website.
                            </div>
                
                            <div className = "font-[700] mt-5"> User Conduct</div>
                            <div className = "mt-3">Users must not engage in fraudulent, abusive, or illegal activities on our website.g our services, you consent to the transfer of your data to countries outside your home jurisdiction.
                            </div>
                            <div className = "mt-3">We reserve the right to remove any content or suspend accounts that violate these terms.
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

export default Terms;