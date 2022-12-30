import Image from "next/image";
import React from "react";

import ways1 from "./assets/mid-bottom-1.1.png"
import ways2 from "./assets/mid-bottom-1.2.png"
import ways3 from "./assets/mid-bottom-1.3.png"
/* eslint-disable @next/next/no-img-element */
export default function Resources() {
    return (
        <>
            <div className="waysWrapper mt-48">
                <div className="topContent text-center pt-20 px-5 md:flex md:justify-between md:px-64">
                    <p className="sectionLead font-inter font-bold leading-[1.15] text-center text-site-darkBlue text-5xl">
                        Resources
                    </p>
                    <button className="px-10 py-3 mt-3 font-inter bg-site-brightBlue text-white font-medium text-sm">
                        Get Started
                    </button>
                </div>
                <div className="waysCardsWrapper md:grid md:grid-cols-3 md:gap-12  md:px-48">
                    <div className="waysCard pl-12 pr-12 mt-16 md:pl-0 md:pr-0">
                        <div className="imageWrapper relative w-full">
                            <Image
                                className="w-full h-72 object-cover"
                                src={ways1}
                                alt="Img1"
                            />
                        </div>
                        <p className="cardLead mt-8 md:mt-6 font-inter text-site-darkBlue font-bold text-2xl md:text-xl">
                            A high-converting, high-performing template
                        </p>
                        <p className="cardSubText pr-8 md:pr-0 mt-4 font-inter leading-loose font-normal text-base md:text-sm text-site-createSubText">
                            Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.
                        </p>
                        <button className="px-10 py-3 mt-10 font-inter bg-site-createButton text-site-darkBlue font-medium text-base">
                            Read Article
                        </button>
                    </div>
                    <div className="waysCard pl-12 pr-12 mt-16 md:pl-0 md:pr-0">
                        <div className="imageWrapper relative w-full">
                            <Image
                                className="w-full h-72 object-cover"
                                src={ways2}
                                alt="Img1"
                            />
                        </div>
                        <p className="cardLead mt-8 md:mt-6 font-inter md:text-xl text-site-darkBlue font-bold text-2xl">
                            With a clean, minimal and professional look
                        </p>
                        <p className="cardSubText md:pr-0 md:text-sm pr-8 mt-4 font-inter leading-loose font-normal text-base text-site-createSubText">
                            Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.
                        </p>
                        <button className="px-10 py-3 mt-10 font-inter bg-site-createButton text-site-darkBlue font-medium text-base">
                            Read Article
                        </button>
                    </div>
                    <div className="waysCard pl-12 pr-12 mt-16 md:pl-0 md:pr-0">
                        <div className="imageWrapper relative w-full">
                            <Image
                                className="w-full h-72 object-cover"
                                src={ways3}
                                alt="Img1"
                            />
                        </div>
                        <p className="cardLead mt-8 md:mt-6 font-inter md:text-xl text-site-darkBlue font-bold text-2xl">
                            Opus made our journey possible
                        </p>
                        <p className="cardSubText md:pr-0 md:text-sm pr-8 mt-4 font-inter leading-loose font-normal text-base text-site-createSubText">
                            Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.
                        </p>
                        <button className="px-10 py-3 mt-10 font-inter bg-site-createButton text-site-darkBlue font-medium text-base">
                            Read Article
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
