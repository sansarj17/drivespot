/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import ipadLady from "./assets/mid-bottom-2.2.png";

export default function Knowledge() {
    return (
        <>
            <div className="featureWrapper md:flex md:items-center md:flex-row-reverse md:w-[72%] md:mx-auto mt-48">
                <div className="featureTextContent md:w-[60%] relative">
                    <p className="sectionTitle text-base px-16 font-bold tracking-widest text-site-darkBlue opacity-60 font-inter">
                        OUR KNOWLEDGE
                    </p>
                    <p className="sectionLead mt-6 px-7 md:pl-12 md:pr-0 font-inter font-[750] leading-[1.2] text-left text-site-darkBlue text-5xl">
                        A UI Kit that's Modern & Elegant
                    </p>
                    <p className="subText font-inter text-site-createSubText mt-14 md:mt-12 pl-7 md:pl-12 pr-10 md:pr-4 text-lg md:text-base font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras eget consectetur eros. Aliquam erat volutpat.
                    </p>
					<div className="blankDiv absolute right-24 w-10 h-10 md:w-16 md:h-16 md:-left-12 md:-bottom-32 bg-site-lightBlue"></div>
					<div className="blankDiv absolute right-24 w-10 h-10 md:-top-32 md:w-6 md:h-6 md:-left-40 bg-site-lightBlue"></div>
                </div>
                <div className="imgContent p-12 mt-4">
                    <Image src={ipadLady} alt="Lady with ipad" />
                </div>
            </div>
        </>
    );
}
