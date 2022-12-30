import React from "react";

import {FaMousePointer} from "react-icons/fa"

export default function Better() {
    return (
        <>
            <div className="betterWrapper md:flex">
                <div className="textContent px-7">
                    <p className="sectionLead mt-60 font-inter font-bold leading-[1.15] tracking-wide text-left text-site-darkBlue text-5xl">
                        Make your site better with Opus
                    </p>
                    <p className="sectionSubText mt-4 font-inter font-normal text-lg text-site-lightText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras eget consectetur eros. Aliquam erat volutpat.
                        Praesent pulvinar arcu non lectus dapibus, a pulvinar
                        mauris aliquam.
                    </p>
                    <button className="px-9 py-3 mt-16 font-inter bg-site-brightBlue text-white font-medium text-sm">
                        Learn More
                    </button>
                </div>

                <div className="betterContent px-7">
                    <div className="betterCard mt-12 bg-white px-6 py-8 rounded">
                        <div className="icon"><FaMousePointer className="text-site-brightBlue text-3xl"/></div>
                        <p className="cardText mt-6 font-inter font-bold text-2xl">Build or Customize a Website in Minutes</p>
                    </div>
                    <div className="betterCard mt-12 bg-white px-6 py-8 rounded">
                        <div className="icon"><FaMousePointer className="text-site-brightBlue text-3xl"/></div>
                        <p className="cardText mt-6 font-inter font-bold text-2xl">Our UI Kit was made for creativity.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
