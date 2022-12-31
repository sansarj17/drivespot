import Image from 'next/image'
import React from 'react'

import logo from "./assets/logo.png"

export default function Navbar() {
  return <>
	<nav className="navbar-wrapper h-64 w-full border-b-2 border-gray-500 px-52 max-h-20 flex items-center justify-between bg-site-darkBlue">
		<div className="logoWrapper py-4 w-48">
			<Image className="object-cover w-full h-full" src={logo} alt="Logo"/>
		</div>
		<div className="navLinks flex justify-between items-center w-[50%]  ">
			<div className="linkWrapper h-20 relative flex items-center">
				<p className="link cursor-pointer font-open uppercase text-site-lightGreen font-normal text-xs tracking-widest">Home</p>
				<div className="bottomHighlight  absolute w-full h-1 rounded-full bottom-0 bg-site-lightGreen"></div>
			</div>
			<div className="linkWrapper h-20 relative flex items-center">
				<p className="link cursor-pointer font-open uppercase text-white font-normal text-xs tracking-widest">About</p>
				{/* <div className="bottomHighlight absolute w-full h-1 rounded-full bottom-0 bg-site-lightGreen"></div> */}
			</div>
			<div className="linkWrapper h-20 relative flex items-center">
				<p className="link cursor-pointer font-open uppercase text-white font-normal text-xs tracking-widest">Services</p>
				{/* <div className="bottomHighlight absolute w-full h-1 rounded-full bottom-0 bg-site-lightGreen"></div> */}
			</div>
			<div className="linkWrapper h-20 relative flex items-center">
				<p className="link cursor-pointer font-open uppercase text-white font-normal text-xs tracking-widest">Products</p>
				{/* <div className="bottomHighlight absolute w-full h-1 rounded-full bottom-0 bg-site-lightGreen"></div> */}
			</div>
			<div className="linkWrapper h-20 relative flex items-center">
				<p className="link cursor-pointer font-open uppercase text-white font-normal text-xs tracking-widest">Contact</p>
				{/* <div className="bottomHighlight absolute w-full h-1 rounded-full bottom-0 bg-site-lightGreen"></div> */}
			</div>
		</div>
	</nav>
  </>
}
