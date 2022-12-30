import Image from 'next/image'
import React from 'react'

import logo from "./assets/logo.png"

export default function Footer() {

	const overViewLinks:Array<string> = ["Overview","Landings","Company","Pricing","CMS Pages","Accounts","Buy for Figma"];
	const pagesLinks:Array<string> = ["Landing 1","Landing 2","Landing 3","Company 1","Company 2","Company 3","Blog 1","Blog 2","Contact 1","Contact 2","Contact 3",];
	const pages2Links:Array<string> = ["Case Studies","Careers","Pricing 1","Pricing 2","Pricing 3","Login","Register","Forgot Password","Blog Post","Team Member","Case Study","Job Post"];

	const NormalLink = ({text}:{text:string}) => <>
	<p className="normalLink mt-4 font-inter text-base font-[500] text-site-darkBlue">{text}</p>
	</>

  return <>
  <footer className="mt-48 px-4">
	  <div className="logoWrapper">
		  <Image src={logo} alt="Opus Logo"/>
	  </div>
	  <div className="footerContent md:px-36 md:flex md:justify-between mt-10">
		  <div className="links md:flex md:justify-between md:w-[50%]">
			  <div className="overView">
				  <p className="linksHead text-site-waysCardSubtext font-inter tracking-widest font-bold text-sm">OVERVIEW</p>
				  {overViewLinks?.map((link:string,index:number) => <NormalLink key={`index-${link.substr(0,3)}`} text={link}/>)}
			  </div>
			  <div className="overView mt-12 md:mt-0">
				  <p className="linksHead text-site-waysCardSubtext font-inter tracking-widest font-bold text-sm">PAGES</p>
				  {pagesLinks?.map((link:string,index:number) => <NormalLink key={`index-${link.substr(0,3)}`} text={link}/>)}
			  </div>
			  <div className="overView mt-12 md:mt-0">
				  <p className="linksHead text-site-waysCardSubtext font-inter tracking-widest font-bold text-sm">PAGES</p>
				  {pages2Links?.map((link:string,index:number) => <NormalLink key={`index-${link.substr(0,3)}`} text={link}/>)}
			  </div>
		  </div>
		  <div className="companyInfo md:pl-12 md:w-[50%]">
			  <div className="mailInput mt-12 md:mt-0">
				  <input className="px-4 py-3 font-inter text-base bg-opacity-40 text-site-waysCardSubtext bg-site-createButton outline-1" placeholder="Email address" type="email"/>
				  <button className="px-10 py-3 font-inter bg-site-brightBlue text-white font-medium text-sm cursor-pointer">Get Started</button>
			  </div>
			  <div className="tools mt-8 md:flex md:justify-between">
				  <div className="toolSolo md:mr-6">
				  <p className="linksHead text-site-waysCardSubtext font-inter tracking-widest font-bold text-sm">OPUS FOR WEBFLOW</p>
				  <p className="text mt-3 text-site-brightBlue font-bold font-inter text-[1.7rem]">Lorem Ipsum</p>
				  </div>
				  <div className="toolSolo mt-8 md:mt-0">
				  <p className="linksHead text-site-waysCardSubtext font-inter tracking-widest font-bold text-sm">OPUS FOR FIGMA</p>
				  <p className="text mt-3 text-site-brightBlue font-bold font-inter text-[1.7rem]">Lorem Ipsum</p>
				  </div>
			  </div>
			  <p className="copyright mt-11 text-site-waysCardSubtext text-lg">© Template by <span className="text-site-brightBlue text-base font-inter">Lorem</span> - Powered by <span className="text-site-brightBlue text-base font-inter">Ipsum</span></p>
		  </div>
	  </div>
	  <div className="baseLinks my-16 flex justify-around px-12 md:px-32 md:justify-start">
		  {["Style Guide","Licence","Changelog"].map((item:string,index:number) => <p key={`index-${item.substr(0,5)}`} className="basicLink mr-10 text-sm font-normal font-inter text-site-lightText">{item}</p>)}
	  </div>
  </footer>
  </>
}
