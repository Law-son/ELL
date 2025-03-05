import { Link } from "react-router-dom";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";
import Timer from "./Images/Timer.png";
import Logo from "./Images/Logo.png";
import Location from "./Images/Location.png";


const Footer = () => {
  return (
    <div>
        <footer className = "w-full bg-[#EAEEECFF] pt-20 pb-10 hidden lg:block mt-28">
                            <div className = "flex justify-center items-start">
                            <div className = "lg:flex gap-12 md:mx-10 items-start">
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
                                            <Link to="https://direct.lc.chat/19062191/">Contact</Link>
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
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">Download App</div>
                                    <div className = "flex gap-8 lg:w-[100%]">
                                        <a href = "https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5">
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
            
                                        <a href = "https://apps.apple.com/app/easyfx6/id6740037390">
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
            
                                    <a href = "https://www.exchangelight.net/">
                                        <div className="bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 flex flex-col items-center rounded-[2px] py-2 px-[18px] gap-1 lg:w-[100%]">
                                                <div className = "flex justify-center">
                                                    <img src = {Surf} className = "object-cover size-6"/>
                                                </div>
                                                <div className = "flex flex-col items-center justify-center mt-2">
                                                    <div className = "text-[8px] font-[400] text-[#434443FF]">Surf on the</div>
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
                            <div className = "md:flex justify-center items-start gap-10 mx-12 md:mx-0">
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
                                                <Link to="https://direct.lc.chat/19062191/">Contact</Link>
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
            
                                    <div className = "text-left mt-[56px]">
                                    <div className = "text-[12px] font-[700] text-[#171A1FFF]">Download App</div>
                                    <div className = "flex gap-3 lg:w-[100%]">
                                        <a href = "https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5">
                                            <div className="flex bg-[#000000FF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center  rounded-[2px] px-2 gap-1">
                                                <div className = "-ml-2">
                                                    <img src = {Play} className = "object-cover"/>
                                                </div>
                                                <div className = "flex flex-col items-center">
                                                    <div className = "text-[5px] font-[400] text-[#FFFFFFFF]">GET IT ON</div>
                                                    <div className = "text-[9px] font-[400] text-[#FFFFFFFF]">Google Play</div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href = "https://apps.apple.com/app/easyfx6/id6740037390">
                                            <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] px-2 gap-1">
                                                <div className = "-ml-2">
                                                    <img src = {Apple} className = "object-cover"/>
                                                </div>
                                                <div className = "flex flex-col items-center">
                                                    <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                                    <div className = "text-[9px] font-[400] text-[#434443FF]">App Store</div>
                                                </div>
                                            </div>
                                        </a>
            
                                        
                                    </div>
            
                                    <a href = "https://www.exchangelight.net/">
                                        <div className="bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 flex flex-col items-center rounded-[2px] py-2 px-[18px] gap-1 lg:w-[100%]">
                                                <div className = "flex justify-center">
                                                    <img src = {Surf} className = "object-cover size-6"/>
                                                </div>
                                                <div className = "flex flex-col items-center justify-center mt-2">
                                                    <div className = "text-[8px] font-[400] text-[#434443FF]">Surf on the</div>
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
                                                    <Link to="https://direct.lc.chat/19062191/">Contact</Link>
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
                                            <div className = "text-[12px] font-[700] text-[#171A1FFF]">Download App</div>
                                            <div className = " gap-3">
                                                <a href = "https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5">
                                                    <div className = "flex gap-8 w-[100%]">
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
            
                                                <a href = "https://apps.apple.com/app/easyfx6/id6740037390">
                                                    <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center justify-center rounded-[2px] px-4 gap-1 py-2  w-[100%]">
                                                            <div className = "-ml-2">
                                                                <img src = {Apple} className = "object-cover size-6"/>
                                                            </div>
                                                            <div className = "flex flex-col items-center just">
                                                                <div className = "text-[5px] font-[400] text-[#434443FF]">Download on the</div>
                                                                <div className = "text-[9px] font-[400] text-[#353535FF]">App Store</div>
                                                            </div>
                                                    </div>
                                                </a>
            
                                                <a href = "https://www.exchangelight.net/">
                                                    <div className="flex bg-[#FFFFFFFF] border-[1px] border-[#9C9D9D00] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] mt-3 items-center rounded-[2px] py-2 px-[18px] gap-1 w-[100%]">
                                                            <div className = "">
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
  );
};

export default Footer;
