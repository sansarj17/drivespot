import Image from 'next/image'
import React from 'react'

import ways1 from "./assets/mid-bottom-1.1.png"
import ways2 from "./assets/mid-bottom-1.2.png"
import ways3 from "./assets/mid-bottom-1.3.png"

export default function Ways() {
  return <>
  <div className="waysWrapper bg-site-darkBlue mt-32 pb-24 md:pb-32">
	  <div className="topContent text-center pt-20 px-5 md:flex md:justify-between md:px-64">
	  <p className="sectionLead font-inter font-bold leading-[1.15] text-center text-white text-5xl">Ways to work with us</p>
	  <button className="px-10 py-3 mt-4 font-inter bg-site-brightBlue text-white font-medium text-sm">Get Started</button>
	  </div>
	  <div className="waysCardsWrapper md:grid md:grid-cols-3 md:gap-12  md:px-40">
		  <div className="waysCard px-10 md:px-4 mt-16">
			  <div className="imageWrapper relative w-full">
				  <div className="blankDiv w-20 h-20 right-0 bg-site-brightBlue absolute"></div>
				  <div className="blankDiv md:w-8 md:h-8 md:-top-8 md:-right-8 bg-site-lightBlue w-10 h-10 -top-10 -right-10 bg-site-brightBlue absolute"></div>
				  <Image className="w-full h-72 object-cover" src={ways1} alt="Img1"/>
			  </div>
			  <p className="cardLead md:text-xl mt-8 font-inter text-white font-bold text-2xl">Project Management</p>
			  <p className="cardSubText md:text-sm md:leading-6 mt-4 font-inter leading-loose font-normal text-base text-site-waysCardSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
		  </div>
		  <div className="waysCard px-10 md:px-4 mt-16">
			  <div className="imageWrapper relative w-full">
			  <div className="blankDiv w-20 h-20 md:w-16 md:h-16 -left-6 -bottom-6 bg-site-lightBlue absolute"></div>
				  <Image className="w-full h-72 object-cover" src={ways2} alt="Img1"/>
			  </div>
			  <p className="cardLead md:text-xl mt-10 font-inter text-white font-bold text-2xl">Advanced Analytics</p>
			  <p className="cardSubText md:text-sm md:leading-6 mt-4 font-inter leading-loose font-normal text-base text-site-waysCardSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
		  </div>
		  <div className="waysCard pl-10 md:px-4 mt-16">
			  <div className="imageWrapper w-full">
				  <Image className="w-full h-72 object-cover" src={ways3} alt="Img1"/>
			  </div>
			  <p className="cardLead md:text-xl  mt-8 font-inter text-white font-bold text-2xl">Marketing & Dashboard</p>
			  <p className="cardSubText md:text-sm md:leading-6 md:pr-0 pr-10 mt-4 font-inter leading-loose font-normal text-base text-site-waysCardSubtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
		  </div>
	  </div>
  </div>
  </>
}
