import Image from "next/image";
import React from "react";

import laptop from "./assets/ds-4.png";

export default function Pricing() {
    return (
        <>
            <div className="sharing-wrapper pb-64 bg-site-greyishWhite">
                <p className="heading font-open pt-48 text-center text-xl uppercase font-normal text-site-darkBlue">
                    <span className="font-bold">LOREM </span>IPSUM DOLOR
                </p>
                <p className="text font-open text-center text-light capitalize text-site-lightDarkBlue text-base mt-6 w-[75ch] opacity-60 mx-auto">
                    Use groups to private share your files between friends,
                    family or co-workers. chat & collaborate with members and
                    control who does what.
                </p>
                <div className="pricingPlansWrapper mt-16 flex justify-center items-center">
                    <div className="pricingCard bg-white w-72">
                        <p className="heading bg-opacity-90 bg-site-lightDarkBlue uppercase text-center text-white font-open font-bold text-lg py-4">
                            ULtimate
                        </p>
                        <div className="price bg-white py-12 border-b-[1px] border-gray-200">
                            <p className="value font-open font-bold italic text-4xl text-center text-site-lightDarkBlue opacity-60">
                                $ 199
                            </p>
                            <p className="font-open -mt-2 font-bold italic text-lg text-center text-site-lightDarkBlue opacity-60">
                                / month
                            </p>
                        </div>
                        <div className="features mt-[0.95px] border-t-[1px] border-gray-200">
                            {[
                                "1 Hosting",
                                "2 Email Meeting",
                                "5 databases",
                                "2 Design Pack",
                                "3 Website Layouts",
                                "5 Header Style",
                                "3 Online Store",
                            ].map((item: string, index: number) => (
                                <p
                                    key={`index-${item.substr(2, 5)}`}
                                    className=" even:bg-site-lightDarkBlue even:bg-opacity-5 font-open text-sm text-site-lightDarkBlue text-opacity-40 bg-white text-center py-2"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="bottom bg-site-lightDarkBlue bg-opacity-5 py-4 text-center">
                            <button className="bg-site-lightGreen cursor-pointer text-white font-open text-base px-4 py-2 font-bold uppercase">
                                Get Started Today
                            </button>
                        </div>
                    </div>
					<div className="pricingCard scale-[1.05] bg-white w-72">
                        <p className="heading bg-opacity-60 bg-site-lightDarkBlue uppercase text-center text-white font-open font-bold text-lg py-4">
                            Standard
                        </p>
                        <div className="price bg-white py-12 border-r-[1px] border-l-[1px] border-gray-200 border-b-2 ">
                            <p className="value font-open font-bold italic text-4xl text-center text-site-lightDarkBlue opacity-60">
                                $ 299
                            </p>
                            <p className="font-open -mt-2 font-bold italic text-lg text-center text-site-lightDarkBlue opacity-60">
                                / month
                            </p>
                        </div>
                        <div className="features border-r-[1px] border-l-[1px] border-gray-200 mt-[0.25px] border-t-2">
                            {[
                                "5 Hosting",
                                "5 Email Meeting",
                                "15 databases",
                                "12 Design Pack",
                                "9 Website Layouts",
                                "15 Header Style",
                                "15 Online Store",
                            ].map((item: string, index: number) => (
                                <p
                                    key={`index-${item.substr(2, 5)}`}
                                    className=" even:bg-site-lightDarkBlue even:bg-opacity-5 font-open text-sm text-site-lightDarkBlue text-opacity-40 bg-white text-center py-2"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="bottom border-r-[1px] border-b-[1px] border-l-[1px] border-gray-200 bg-site-lightDarkBlue bg-opacity-5 py-4 text-center">
                            <button className="bg-site-lightDarkBlue cursor-pointer bg-opacity-80 text-white font-open text-base px-4 py-2 font-bold uppercase">
                                Get Started Today
                            </button>
                        </div>
                    </div>
					<div className="pricingCard bg-white w-72">
                        <p className="heading bg-opacity-90 bg-site-lightDarkBlue uppercase text-center text-white font-open font-bold text-lg py-4">
                            DIAmond
                        </p>
                        <div className="price bg-white py-12 border-b-[1px] border-gray-200">
                            <p className="value font-open font-bold italic text-4xl text-center text-site-lightDarkBlue opacity-60">
                                $ 499
                            </p>
                            <p className="font-open -mt-2 font-bold italic text-lg text-center text-site-lightDarkBlue opacity-60">
                                / month
                            </p>
                        </div>
                        <div className="features mt-[0.95px] border-t-[1px] border-gray-200">
                            {[
                                "10 Hosting",
                                "20 Email Meeting",
                                "25 databases",
                                "20 Design Pack",
                                "30 Website Layouts",
                                "55 Header Style",
                                "35 Online Store",
                            ].map((item: string, index: number) => (
                                <p
                                    key={`index-${item.substr(2, 5)}`}
                                    className=" even:bg-site-lightDarkBlue even:bg-opacity-5 font-open text-sm text-site-lightDarkBlue text-opacity-40 bg-white text-center py-2"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="bottom bg-site-lightDarkBlue bg-opacity-5 py-4 text-center">
                            <button className="bg-site-lightGreen cursor-pointer text-white font-open text-base px-4 py-2 font-bold uppercase">
                                Get Started Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
