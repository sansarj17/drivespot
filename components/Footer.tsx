import Image from "next/image";
import React from "react";

import logo from "./assets/logo.png";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-site-darkBlue pt-8 pb-12 px-52">
                    <div className="ds-logo">
                        <Image className="w-64" src={logo} alt="Logo" />
                    </div>
                    <div className="text-content flex justify-between">
                        <p className="lorem pt-3 text-white font-open font-normal text-sm opacity-80">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa mi, placerat feugiat volutpat vel, ullamcorper non velit.
                        </p>
                        <div className="socials">
                            <div className="social flex items-center justify-between w-[17.5rem]">
                                <p className="socialLead opacity-80 font-open uppercase text-[0.85rem] text-site-lightGreen">
                                    Phone:
                                </p>
                                <p className="socialText w-[68%] text-white font-open text-[0.8rem] opacity-70">
                                    (07) 5512 3456
                                </p>
                            </div>
                            <div className="social mt-2 flex items-center justify-between w-[17.5rem]">
                                <p className="socialLead opacity-80 font-open uppercase text-[0.85rem] text-site-lightGreen">
                                    Email:
                                </p>
                                <p className="socialText w-[68%] text-white font-open text-[0.8rem] opacity-70">
                                    lorem@ipsumdollorsit.com.au
                                </p>
                            </div>
                            <div className="social mt-2 flex justify-between w-[17.5rem]">
                                <p className="socialLead opacity-80 font-open uppercase text-[0.85rem] text-site-lightGreen">
                                    Address:
                                </p>
                                <p className="socialText leading-6 w-[26ch] text-white font-open text-[0.8rem] opacity-70">
                                    1234/56 Lorem Ipsum dolor sit, Consecutor,
                                    QLD 4000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-div flex items-center py-4 px-52 justify-between bg-site-lightDarkBlue">
                    <p className="text-white opacity-60 font-open text-[0.725rem]">C 2015 Company Name. All rights reserved</p>
                    <div className="links w-[47%] flex justify-between items-center text-white text-opacity-60 text-[0.725rem]">
                        <p className="text">Home</p>
                        <p className="">|</p>
                        <p className="text">About</p>
                        <p className="">|</p>
                        <p className="text">Services</p>
                        <p className="">|</p>
                        <p className="text">Products</p>
                        <p className="">|</p>
                        <p className="text">Testimonials</p>
                        <p className="">|</p>
                        <p className="text">Contact</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
