import { MdArrowForward, MdArrowRight } from "react-icons/md";
import hero from "./assets/Hero-person.png"
import Image from "next/image";
export default function Hero() {
    return (
        <>
            <div className="heroWrapper">
                <div className="heroTextContent">
                    <div className="blankDiv relative bg-white h-20">
						<div className="box w-20 h-20 bg-site-brightBlue"></div>
						<div className="box absolute translate-x-20 z-20 w-10 h-10 bg-site-brightBlue"></div>
					</div>
                    <div className="text bg-site-darkBlue pt-24">
                        <h1 className="font-inter font-bold text-center text-6xl text-white">
                            Built for enterprise businesses.
                        </h1>
                        <p className="text-white font-inter text-lg leading-9 font-medium text-center px-9 mt-4">
                            Opus includes everything you need to build a
                            beautiful website for you buisness. Built to perform
                            and look good doing so.
                        </p>
                        <div className="buttonWrapper flex justify-center mt-14">
                            <button className=" bg-site-brightBlue px-4 py-4 text-white font-inter flex items-center justify-between">
                                Contact Us{" "}
                                <MdArrowForward className="ml-4 text-white text-xl" />
                            </button>
                        </div>

                        <p className="text-white font-inter text-center text-xl pt-6 pb-4">Explore Pages</p>
                    </div>
                </div>
                <div className="heroImage relative bg-site-darkBlue">
				<div className="box absolute top-0 right-0 z-20 w-8 h-8 bg-site-brightBlue"></div>
				<Image className="px-8 pt-8" src={hero} alt="Hero"/>
				</div>
            </div>
        </>
    );
}
