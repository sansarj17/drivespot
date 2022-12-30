// import MenuIcon from "@mui/icons-material/Menu";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo from "./assets/logo.png";
import {useWindowSize,ISize} from "../hooks/useWindowSize";

export default function Navbar() {    
	const {width,height} : ISize = useWindowSize()

	return (
        <>
            <nav className="bg-white px-3 md:px-36 h-24 w-full flex items-center justify-between">
                <div className="logo ">
                    <Image className="w-32 md:w-24" src={logo} alt="Logo" />
                </div>
                {width && width < 450 ? (
                    <>
                        <div className="iconWrapper border-2 border-gray-200 h-16 w-16 items-center flex justify-center">
                            <MdMenu className="cursor-pointer text-site-brightBlue text-4xl" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="ul flex items-center justify-between w-[28%]">
                            <p className="font-inter font-medium text-gray-800">
                                Overview
                            </p>
                            <p className="font-inter font-medium text-gray-800">
                                Pages
                            </p>
                            <p className="font-inter font-medium text-gray-800">
                                Template
                            </p>
                        </div>
                        <button className="font-inter bg-site-brightBlue px-5 py-3 text-white ">
                            Contact Us
                        </button>
                    </>
                )}
            </nav>
        </>
    );
}
