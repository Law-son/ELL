import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Images/Logo.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";
import Timer from "./Images/Timer.png";
import PP from "./Images/PP.png";
import PP2 from "./Images/PP2.png";
import Location from "./Images/Location.png";

export class PrivacyPolicy extends Component {

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
                    <img src = {PP} className = "object-cover"/>
                </div>
                
            </header>

            <div className = "w-full mt-12 flex justify-center">
                <div className = "w-[50%] flex justify-center">
                    <div className = "">
                        <div className = "w-full">
                            <img src = {PP2} className = ""/>
                        </div>
                        <div className = "lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#171A1FFF] mt-10">Privacy Policy
                        </div>
                        <div className = "text-[14px] font-[400] text-[#171A1FFF] mt-10 text-left">
                            <div className = "">Effective Date: March 2nd, 2025</div>
                            <div className = "mt-3">At Exchange Light LIMITED, we are committed to respecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our platform, services, or engage with us in any other way. By accessing or using our services, you agree to the terms outlined in this policy.
                            </div>

                            <div className = "font-[700] mt-5">Information We Collect</div>
                            <div className = "mt-3">We collect various types of personal and non-personal information to provide and improve our services. The types of information we may collect include:
                            </div>
                            <div className = "mt-3">Personal Information: This includes information that personally identifies you, such as your name, email address, phone number, mailing address, and any other information you provide to us voluntarily. We may also collect payment details if you engage in transactions through our platform.
                            </div>
                            <div className = "mt-3">Usage Data: We collect data about how you interact with our platform, such as IP addresses, browser types, device types, language preferences, referring/exit pages, and timestamps. This data helps us improve our services and understand user behavior.
                            </div>
                            <div className = "mt-3">Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to track activity on our platform and enhance your experience. Cookies help us remember your preferences, analyze trends, and improve functionality. You can control the use of cookies through your browser settings.
                            </div>
                            <div className = "mt-3">Communication Data: If you contact us directly, whether by email, phone, or other means, we may collect information from these communications, including any feedback or inquiries you may have.
                            </div>

                            <div className = "font-[700] mt-5">How We Use Your Information</div>
                            <div className = "mt-3">We use the information we collect for various purposes, including but not limited to:
                            </div>
                            <div className = "mt-3">Providing Services: To deliver the services you request, including processing transactions, responding to inquiries, and managing your account.
                            </div>
                            <div className = "mt-3">Improving Our Services: To analyze how users interact with our platform and identify areas for improvement. This may involve analyzing usage patterns, conducting research, and enhancing functionality.
                            </div>
                            <div className = "mt-3">Personalization: To customize your experience on our platform and offer personalized recommendations based on your preferences and interactions.
                            </div>
                            <div className = "mt-3">Marketing and Communication: To send you promotional materials, newsletters, and other communications that may be of interest to you. You can opt out of marketing emails at any time.
                            </div>
                            <div className = "mt-3">Compliance with Legal Obligations: To comply with applicable laws, regulations, and legal processes. We may also use your information to enforce our terms and conditions and protect our rights.
                            </div>


                            <div className = "font-[700] mt-5">Data Protection and Security</div>
                            <div className = "mt-3">We take the protection of your personal data seriously. We implement a variety of technical, administrative, and physical safeguards to ensure the security of your information. These measures include:
                            </div>
                            <div className = "mt-3">Encryption: We use industry-standard encryption techniques to protect sensitive data during transmission, such as credit card information or personal details entered on our platform.
                            </div>
                            <div className = "mt-3">Access Control: Access to your personal information is restricted to authorized employees, contractors, and service providers who need access to perform their duties.
                            </div>
                            <div className = "mt-3">Regular Audits: We conduct regular security audits and vulnerability assessments to identify and address any potential weaknesses in our systems.
                            </div>
                            <div className = "mt-3">While we strive to protect your data, please be aware that no method of data transmission or storage is 100% secure. We cannot guarantee the absolute security of your personal information, but we are committed to taking all reasonable steps to protect it.
                            </div>

                            <div className = "font-[700] mt-5">Sharing of Information</div>
                            <div className = "mt-3">We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners, service providers, or other third parties in the following circumstances:
                            </div>
                            <div className = "mt-3">Service Providers: We may share your information with third-party companies who perform services on our behalf, such as payment processing, customer support, hosting, and analytics. These service providers are contractually obligated to protect your data and use it only for the purposes we specify.
                            </div>
                            <div className = "mt-3">Legal Compliance: We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests. This may include sharing your data to prevent fraud, enforce our terms of service, or protect the rights, property, and safety of our company or others.
                            </div>
                            <div className = "mt-3">Business Transfers: In the event of a merger, acquisition, or sale of all or part of our business, your personal information may be transferred as part of the transaction. We will notify you of any such transfer and, if required, obtain your consent.
                            </div>
                            <div className = "mt-3">Consent: We may share your information with others if you give us explicit consent to do so.
                            </div>


                            <div className = "font-[700] mt-5">Your Rights and Choices</div>
                            <div className = "mt-3">You have certain rights regarding your personal information. Depending on your location and applicable laws, these rights may include:
                            </div>
                            <div className = "mt-3">Access: You have the right to request access to the personal information we hold about you.
                            </div>
                            <div className = "mt-3">Correction: You have the right to correct any inaccuracies in the information we hold about you.
                            </div>
                            <div className = "mt-3">Deletion: You can request that we delete your personal information, subject to any legal obligations we may have to retain certain data.
                            </div>
                            <div className = "mt-3">Objection: You can object to the processing of your personal information for certain purposes, such as direct marketing.
                            </div>
                            <div className = "mt-3">Withdrawal of Consent: If we rely on your consent to process your personal information, you can withdraw that consent at any time.
                            </div>
                            <div className = "mt-3">To exercise any of these rights, please contact us at [Your Contact Information]. We may ask you to verify your identity before fulfilling any request.
                            </div>


                            <div className = "font-[700] mt-5">Data Retention</div>
                            <div className = "mt-3">We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. This means that we may retain certain data for longer periods, especially if we are required to do so for legal, accounting, or reporting purposes. Once your information is no longer needed, we will securely delete or anonymize it.
                            </div>
                
                            <div className = "font-[700] mt-5"> International Data Transfers</div>
                            <div className = "mt-3">If you are located outside of [Your Country] and use our services, please be aware that your personal information may be transferred to, stored, and processed in a country that may not have the same data protection laws as your country of residence. By using our services, you consent to the transfer of your data to countries outside your home jurisdiction.
                            </div>



                            <div className = "font-[700] mt-5"> Children's Privacy</div>
                            <div className = "mt-3">Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that we have collected personal information from a child under 18, please contact us immediately, and we will take steps to delete such information.
                            </div>



                            <div className = "font-[700] mt-5"> Changes to This Privacy Policy</div>
                            <div className = "mt-3">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the revised policy on this page with the updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                            </div>
                            
                            

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

export default PrivacyPolicy;