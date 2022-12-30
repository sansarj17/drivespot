/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import ipadLady from "./assets/mid-bottom (3).png";
import stamps from "./assets/stamps.png";

export default function Stamps() {
    return (
        <>
            <div className="featureWrapper md:flex md:justify-between md:px-52 mt-44">
                <div className="reviewTextContent md:-translate-x-12 md:w-[45%] md:py-6 relative">
                    <div className="boxPattern absolute right-5">
                        <div className="box1 translate-x-11 md:translate-x-20 w-10 h-10 md:w-16 md:h-16 bg-site-brightBlue"></div>
                        <div className="box1 translate-x-3 md:translate-x-12 w-8 h-8 bg-site-lightBlue"></div>
                    </div>
                    <div className="textHeaderImg grid place-content-center">
                        <Image
                            className="scale-110"
                            src={stamps}
                            alt="stamps"
                        />
                    </div>
                    <p className="sectionLead mt-10 md:mt-8 px-7 md:px-4 text-center font-inter font-[750] leading-[1.15] text-site-darkBlue text-2xl">
                        The Opus UI Kit lets you showcase your work in style.
                        It's helped take out business online
                    </p>
                    <div className="reviewer text-center mt-12 md:mt-10">
                        <p className="reviewerName font-inter text-site-darkBlue font-[750] text-lg">
                            ALEXA F.
                        </p>
                        <p className="reviewerPost font-inter text-site-lightText font-bold text-sm tracking-[1.8px] mt-2">
                            DESIGNER{" "}
                            <span className="text-site-brightBlue">
                                @STAMPS
                            </span>
                        </p>
                    </div>

                    <div className="navButtons flex justify-between px-36 md:mt-10 mt-12">
                        <button className="prev bg-site-featureTickBG h-10 w-10 flex justify-center items-center">
                            <MdArrowBack />
                        </button>
                        <button className="next h-10 w-10 bg-site-featureTickBG flex items-center justify-center">
                            <MdArrowForward />
                        </button>
                    </div>
                </div>
                <div className="imgContent -mt-6 md:-mt-4 relative z-20 px-10 md:w-[40%] md:pl-6 md:pr-7 md:pt-5">
                    <Image className="object-cover w-full" src={ipadLady} alt="Lady with ipad" />
                </div>
            </div>
        </>
    );
}
