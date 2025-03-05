import React, { Component } from 'react';
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Footer from "./Footer";
import Timer from "./Images/Timer.png";
import Location from "./Images/Location.png";
import S1 from "./Images/S1.png";
import S2 from "./Images/s2.png";


export class Support extends Component {

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
                    <img src = {S1} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "w-full mt-12 flex justify-center">
                <div className = "md:w-[70%] w-[80%] lg:w-[50%] flex justify-center">
                    <div className = "">
                        <div className = "w-full">
                            <img src = {S2} className = ""/>
                        </div>
                        <div className = "lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#171A1FFF] mt-10">Support
                        </div>
                        <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-10 text-left">
                            <div className = "">Last Updated: March 1st, 2025</div>

                            <div className = "font-[700] mt-5">Introduction</div>
                            <div className = "mt-3">Exchange Light Limited ("Company", "we", "our", or "us") is committed to providing excellent customer support. This Support Policy outlines the scope, availability, and limitations of our support services to ensure a smooth experience for our users.
                            </div>


                            <div className = "font-[700] mt-5">Support Availability</div>
                            <div className = "mt-3">Our support team is available 24/7, Monday to Sunday.Support requests can be submitted via Live Chat.We strive to respond to all inquiries within 24 hours.
                            </div>


                            <div className = "font-[700] mt-5">Scope of Support</div>
                            <div className = "mt-3">Account-related issues (registration, login, password recovery).</div>
                            <div className = "mt-3">Technical assistance related to our website and services.</div>
                            <div className = "mt-3">Payment and transaction inquiries.</div>
                            <div className = "mt-3">General troubleshooting and FAQs.</div>
                            

                            <div className = "font-[700] mt-5">Support Request Process</div>
                            <div className = "mt-3">Users can submit a support request through Live Chat.Provide detailed information about the issue, including screenshots if applicable.Our team will assess the request and provide a resolution or further instructions.
                            </div>


                            <div className = "font-[700] mt-5">Escalation Process</div>
                            <div className = "mt-3">If a support issue is not resolved satisfactorily, users may request an escalation.Escalated cases will be reviewed by a senior support representative.We aim to resolve escalated cases as soon as possible.
                            </div>


                            <div className = "font-[700] mt-5">Service Level Agreement (SLA)</div>
                            <div className = "mt-3">Standard response time: Within 24 hours.</div>
                            <div className = "mt-3">Resolution time:depending on issue complexity.</div>
                            <div className = "mt-3">Urgent cases will be prioritized based on impact severity.</div>


                            <div className = "font-[700] mt-5"> Changes to This Support Policy</div>
                            <div className = "mt-3">We reserve the right to update or modify this Support Policy at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of the updated policy.
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

export default Support;