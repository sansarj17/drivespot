/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { MdDone } from "react-icons/md";

import ipadLady from "./assets/mid-bottom-2.1.png";

export default function Feature() {
    return (
        <>
            <div className="featureWrapper md:flex md:items-center md:w-[75%] md:mx-auto mt-48">
                <div className="featureTextContent md:w-[55%]">
                    <p className="sectionTitle text-sm px-16 font-bold tracking-widest text-site-darkBlue opacity-60 font-inter">
                        FEATURES
                    </p>
                    <p className="sectionLead mt-6 px-7 md:pl-7 md:pr-0 md:text-4xl font-inter font-bold leading-[1.2] text-left text-site-darkBlue text-5xl">
                        You're not just doing business. You're doing life.
                    </p>
					<div className="tickListWrapper px-7 mt-16">
						<div className="tickList flex items-center">
                    	    <div className="iconWrapper mr-4 rounded-full w-8 h-8 grid place-content-center bg-site-featureTickBG">
                    	        <MdDone className="text-site-brightBlue text-2xl"/>
                    	    </div>
                    	    <p className="tickText text-lg font-inter font-medium text-site-darkBlue">Responsive Components</p>
                    	</div>
						<div className="tickList md:mt-4 mt-6 flex items-center">
                    	    <div className="iconWrapper mr-4 rounded-full w-8 h-8 grid place-content-center bg-site-featureTickBG">
                    	        <MdDone className="text-site-brightBlue text-2xl"/>
                    	    </div>
                    	    <p className="tickText text-lg font-inter font-medium text-site-darkBlue">Over 50 sections</p>
                    	</div>
						<div className="tickList md:mt-4 mt-6 flex items-center">
                    	    <div className="iconWrapper mr-4 rounded-full w-8 h-8 grid place-content-center bg-site-featureTickBG">
                    	        <MdDone className="text-site-brightBlue text-2xl"/>
                    	    </div>
                    	    <p className="tickText text-lg font-inter font-medium text-site-darkBlue">Handcrafted Pages</p>
                    	</div>
					</div>
                    
                </div>
                <div className="imgContent px-7 mt-6">
                    <Image src={ipadLady} alt="Lady with ipad" />
                </div>
            </div>
        </>
    );
}
