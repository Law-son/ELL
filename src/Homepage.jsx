import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Timer from "./Images/Timer.png";
import Footer from "./Footer";
import Location from "./Images/Location.png";
import Logo from "./Images/Logo.png";
import Navbar from "./Navbar";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";
import Image3 from "./Images/Image3.png";
import Image4 from "./Images/Image4.png";
import Image5 from "./Images/Image5.png";
import Image6 from "./Images/Image6.png";
import Image7 from "./Images/Image7.png";
import Avatar1 from "./Images/Avatar1.png";
import Avatar2 from "./Images/Avatar2.png";
import Container from "./Images/Container.png";
import Container2 from "./Images/Container2.png";
import Container3 from "./Images/Container3.png";
import BitCoin from "./Images/BitCoin.png";
import Trading from "./Images/Trading.png";
import Button from "./Images/Button.png";
import Button2 from "./Images/Button2.png";
import Button3 from "./Images/Button3.png";
import Button4 from "./Images/Button4.png";
import Button5 from "./Images/Button5.png";
import Button6 from "./Images/Button6.png";
import Play from "./Images/Play.png";
import Apple from "./Images/Apple.png";
import Surf from "./Images/Surf.png";


export class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div>
                <header className="pt-[26px] bg-[#f4f8f6] pb-[300px]">
                    <div className="md:flex items-center justify-center text-[#818281FF] md:gap-10 gap-5 text-[10px]">
                        <div className="flex gap-2 items-center justify-center">
                            <img src={Timer} className="text-[#1DD75BFF] size-4" />
                            <div className="">Everyday Available 24/7</div>
                        </div>
                        <div className="flex gap-2 items-center justify-center mt-2 md:mt-0">
                            <img src={Location} className="text-[#1DD75BFF] size-4" />
                            <div className="">30 Millbank, London, United Kingdom</div>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center md:-mt-4 -mt-2">
                        <div className="flex md:gap-1 items-center">
                            <img src={Logo} className="w-[115px] h-[94px] -ml-10 md:-ml-0" />
                            <div className="text-[16px] text-[#171A1FFF] -ml-[30px] md:-ml-9 font-[400]">EXCHANGE LIGHT LIMITED</div>
                        </div>
                        <hr className="lg:w-[50%] md:w-[40%] text-[#DEE1E6FF] hidden md:block"></hr>
                    </div>

                    <div className="flex items-center justify-center md:-mt-8 -mt-5">
                        <Navbar />
                    </div>

                    <div className="md:flex justify-center items-center mt-10 lg:gap-24 md:gap-14 lg:px-32 md:px-20 px-10">
                        <div className="md:w-96 flex justify-center">
                            <img src={Image1} className="object-cover" />
                        </div>

                        <div className="md:w-[50%] md:mt-20 lg:mt-8 mt-10 ">
                            <div className="lg:text-[30px] md:text-[20px] font-[700] text-[#303030FF] text-left">Explore High-Yield Investment Strategies for Maximizing Wealth and Portfolio Growth
                            </div>

                            <div className="text-[14px] font-[400] text-[#818281FF] text-left mt-5">Engage in multi-asset trading, including foreign exchange (Forex), stock indices, commodities, equities, precious metals, and energy derivatives. Benefit from deep market liquidity, institutional-grade execution, and advanced risk management tools.
                            </div>

                            <a href="#">
                                <div className="mt-10">
                                    <div className="bg-[#00BD6FFF] text-[11px] py-[20px] font-[400] text-[#FFFFFFFF] border-none rounded-[6px]"> GET STARTED
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </header>

                <div className="w-full relative flex justify-center items-center py-40">
                    <div className="absolute -top-48 bg-white p-7 lg:w-[70%] w-[90%]">

                        <div className="flex flex-col md:flex-row gap-4 items-stretch">
                            <div className="flex justify-center items-center md:w-[35%]">
                                <div className="h-full border-2 border-[#E0E0E0FF] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col items-center px-5 py-7 rounded-[6px]">
                                    <img src={Container} alt="Radio Trend Chart" />
                                    <div className="text-[18px] font-[400] text-[#373737FF] mt-5">Radio Trend Chart</div>
                                    <div className="text-[11px] font-[400] text-[#8B8B8BFF] text-center mt-4">
                                        Track key financial indicators and liquidity measurements to spot market trends and improve strategic decision-making.
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:w-[35%]">
                                <div className="h-full border-2 border-[#00BD6FFF] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col items-center px-5 py-7 rounded-[6px] bg-[#00BD6FFF]">
                                    <img src={Container2} alt="Fund Security" />
                                    <div className="text-[18px] font-[400] text-[#FFFFFFFF] mt-5">Fund Security</div>
                                    <div className="text-[11px] font-[400] text-[#D0F2E4FF] text-center mt-4">
                                        Monitor financial ratios, liquidity, and risk to identify market patterns and improve data-driven investing.
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:w-[35%]">
                                <div className="h-full border-2 border-[#E0E0E0FF] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col items-center px-5 py-7 rounded-[6px]">
                                    <img src={Container3} alt="Standard Deviation" />
                                    <div className="text-[18px] font-[400] text-[#373737FF] mt-5">Standard Deviation</div>
                                    <div className="text-[11px] font-[400] text-[#8B8B8BFF] text-center mt-4">
                                        To assess portfolio risk, analyze market volatility, diversify assets, and optimize investment strategies for long-term growth.
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="lg:flex justify-center items-center gap-10 mt-16">
                            <div className="flex flex-col justify-center text-left">
                                <div className="md:text-[31px] text-[20px] font-[700] text-[#313131FF] text-center lg:text-left">Achieving #1 in Investment Needs.</div>

                                <div className="text-[11px] font-[400] text-[#838383FF] md:mt-1 mt-3">Aim to be your premier investment partner by providing expert guidance, strategic solutions, and personalized strategies designed for long-term financial success.
                                </div>

                                <div className="text-[14px] font-[700] text-[#373737FF] mt-7 text-left lg:mt-2">Who We Are</div>

                                <div className="text-[11px] font-[400] text-[#838383FF] mt-1">We are an innovative brokerage firm committed to providing user-friendly and advanced trading services.
                                </div>

                                <div className="text-[14px] font-[700] text-[#373737FF] mt-7 lg:mt-2 text-left">What We Do</div>

                                <div className="text-[11px] font-[400] text-[#838383FF] mt-1">As a professional Forex trading platform, we provide many financial services. We assist Forex traders grow sustainably with cutting-edge technology, a secure trading environment, and global market access, versatile trading tools, and high-quality customer service.
                                </div>
                            </div>

                            <div className="lg:w-[200%] w-full mt-20 lg:mt-0 flex justify-center items-center">
                                <img src={BitCoin} className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative bg-[#2C2C2CFF] py-6 flex justify-center lg:mt-72 md:mt-[600px] mt-[1100px] md:pb-52 pb-32">
                    <div className="relative">
                        <div className="text-[32px] font-[700] text-[#FFFFFFFF]">Top Investment Platform</div>
                        <div className="text-[12px] font-[400] text-[#939393FF] mx-[20%] mt-3">Explore a robust and secure financial platform engineered to empower informed investment decisions and maximize wealth accumulation.
                        </div>
                        <div className="flex justify-center mt-12 mx-20">
                            <div className="w-[80%] absolute h-full">
                                <img src={Trading} className="object cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:mt-52 mt-30 flex justify-center">
                    <div className="flex justify-center items-center w-[70%] gap-12">
                        <div className="w-full lg:block hidden">
                            <img src={Image2} className="" />
                        </div>
                        <div className="text-left">
                            <div className="lg:text-[32px] md:text-[28px] text-[20px] font-[700] text-[#333333FF]">Find Stocks According To Your Criteria</div>
                            <div className="text-[11px] font-[400] text-[#878787FF] mt-3">Effortlessly analyze and filter stocks based on your investment criteria, leveraging advanced financial metrics for informed, data-driven decisions.</div>

                            <div className="flex items-center mt-7 gap-10">
                                <img src={Image3} className="object-cover size-14" />
                                <div className="">
                                    <div className="text-[15px] font-[700] text-[#3B3B3BFF]">Choose Your Stock</div>
                                    <div className="text-[11px] font-[400] text-[#878787FF]">Use market insights to identify stocks that match your investment goals and risk tolerance.</div>
                                </div>
                            </div>

                            <div className="bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                            <div className="flex items-center gap-10">
                                <img src={Image4} className="object-cover size-14" />
                                <div className="">
                                    <div className="text-[15px] font-[700] text-[#3B3B3BFF]">Detailed Comparison</div>
                                    <div className="text-[11px] font-[400] text-[#878787FF]">Use detailed financial information to confidently compare stocks and make strategic investing decisions.</div>
                                </div>
                            </div>

                            <div className="bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                            <div className="flex items-center gap-10">
                                <img src={Image5} className="object-cover size-14" />
                                <div className="">
                                    <div className="text-[15px] font-[700] text-[#3B3B3BFF]">Buy Your Shares</div>
                                    <div className="text-[11px] font-[400] text-[#878787FF]">Seamlessly acquire stocks through a secure, streamlined process, ensuring effortless and convenient investing.</div>
                                </div>
                            </div>

                            <div className="bg-[#DEE1E6FF] w-[2px] h-8 ml-6"></div>

                            <div className="flex items-center gap-10">
                                <img src={Image6} className="object-cover size-14" />
                                <div className="">
                                    <div className="text-[15px] font-[700] text-[#3B3B3BFF]">Sell Anytime</div>
                                    <div className="text-[11px] font-[400] text-[#878787FF]">We make it easy to sell your shares at any moment, giving you maximum freedom and control over your investments.</div>
                                </div>
                            </div>

                            <div className="w-full lg:hidden mt-16">
                                <img src={Image2} className="w-full" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-[#f4f8f6] md:mt-56 mt-36 w-full relative pt-16 flex justify-center pb-52 ">
                    <div className="w-[70%] lg:flex relative gap-12 justify-center items-center">
                        <div className="text-left">
                            <div className="text-[32px] font-[700] text-[#323332FF] text-center lg:text-left">Financial Markets</div>
                            <div className="text-[14px] font-[400] text-[#171A1FFF] mt-5 ">Financial markets serve as the foundation of global capital distribution, driving price transparency, risk management, and strategic asset diversification across equities, forex, and commodity derivatives.
                            </div>
                            <div className="text-[14px] font-[400] text-[#171A1FFF] mt-4">
                                Our platform delivers institutional-grade price discovery, deep liquidity integration, and ultra-low-latency trade execution, empowering traders and investors to maximize capital efficiency, hedge risks effectively, and strengthen market positioning in an increasingly dynamic trading landscape.
                            </div>
                        </div>
                        <div className="lg:w-[250%] w-full flex justify-center">
                            <img src={Image7} className="object-cover lg:-mt-28 mt-16" />
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute -top-28 w-[70%]">
                        <div className="flex justify-center">
                            <div className="lg:flex justify-baseline gap-2">
                                <div className="bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#393939FF] mt-5">Financial Trading</div>
                                    <div className="text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Real-time market data and powerful analytics enable strategic decision-making on a variety of stocks, currency, and commodities.
                                    </div>
                                </div>
                                <div className="bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button2} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#393939FF] mt-5">Manage Risk</div>
                                    <div className="text-[12px] font-[400] text-[#8A8A8AFF] mt-4">In volatile markets, safeguard your investments and optimize returns with cutting-edge financial tools and risk management.
                                    </div>
                                </div>
                                <div className="bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button3} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#393939FF] mt-5">Trading Psychology</div>
                                    <div className="text-[12px] font-[400] text-[#8A8A8AFF] mt-4">In stressful markets, professional trading psychology helps you stay calm, control emotions, and make sensible, data-driven judgments.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <div className="lg:flex justify-baseline gap-2">
                                <div className="bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button4} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#393939FF] mt-5">Safe Account</div>
                                    <div className="text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Ideal for those who choose risk-managed investing and capital preservation over aggressive growth.
                                    </div>
                                </div>
                                <div className="bg-[#FDFCFDFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button5} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#393939FF] mt-5">Data Privacy</div>
                                    <div className="text-[12px] font-[400] text-[#8A8A8AFF] mt-4">Always trust our strong data security protocols and modern encryption to protect your personal and financial data.
                                    </div>
                                </div>
                                <div className="bg-[#00BD6FFF] border-[1px] border-[#E5E5E5FF] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] py-8 px-7 mt-5 lg:mt-0 lg:w-[35%]">
                                    <div className="flex justify-center">
                                        <img src={Button6} />
                                    </div>
                                    <div className="text-[14px] font-[400] text-[#FDFCFDFF] mt-5">Customer Support</div>
                                    <div className="text-[12px] font-[400] text-[#C8F1E0FF] mt-4">Our committed support team provides rapid, reliable answers to your questions and issues anytime.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lg:mt-[530px] md:mt-[1450px] mt-[1670px] w-full relative flex justify-center">
                    <div className="lg:flex justify-center items-center lg:w-[60%] w-[70%] gap-5">
                        <div className="">
                            <div className="text-[27px] font-[700] text-[#353535FF] lg:text-left ">Our Clients Say
                                About Us
                            </div>
                            <div className="text-[12px] font-[400] text-[#A3A3A3FF] text-left mt-3">Listen to firsthand experiences from our satisfied clients as they showcase our exceptional service, industry expertise, and the significant impact we've had on their investment success.</div>
                        </div>

                        <div className="p-5 rounded-[2px] border-[#1D212830] border-[1px] shadow-[0px_0px_1px_#171a1f12, 0px_0px 2px_#171a1f1F] mt-7 lg:mt-0">
                            <div className="text-[12px] font-[400] text-[#949494FF] text-left">Working with this team has been a game-changer for my investments. Their expert advice and personalized approach have helped me navigate the market with confidence.
                            </div>

                            <div className="flex gap-2 items-center justify-center lg:justify-normal mt-5">
                                <div className="">
                                    <img src={Avatar1} className="object-cover" />
                                </div>
                                <div className="text-[11px] font-[400] text-[#555454FF]">Shawn Beltran</div>
                            </div>
                        </div>

                        <div className="p-5 rounded-[2px] border-[#1D212830] border-[1px] shadow-[0px_0px_1px_#171a1f12, 0px_0px 2px_#171a1f1F] mt-7 lg:mt-0">
                            <div className="text-[12px] font-[400] text-[#949494FF] text-left">I’ve never felt more secure in my financial decisions. The customer support is outstanding, and I can always count on them to guide me through any questions or concerns.
                            </div>

                            <div className="flex gap-2 items-center mt-5 justify-center lg:justify-normal">
                                <div className="">
                                    <img src={Avatar2} className="object-cover" />
                                </div>
                                <div className="text-[11px] font-[400] text-[#555454FF]">Miya Hansen</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-24 w-full flex justify-center mb-24">
                    <div className="lg:w-[60%] w-[70%] items-center bg-[] rounded-[2px] shadow-[0px_0px_1px_#171a1f12, 0px_0px_2px_#171a1f1F] bg-[linear-gradient(180deg,#303532_26.68%,#2B2B2B_66.61%)] border-[1px] border-[#B6B6B6FF] py-24 md:px-12 px-5">
                        <div className="">
                            <div className="text-[27px] font-[700] text-[#FFFFFF]">Start your crypto journey</div>
                        </div>
                        <div className="mt-5">
                            <div className="text-[14px] font-[400] text-[#FFFFFF]">Explore, Invest, and Grow in the World of Digital Assets</div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Homepage;