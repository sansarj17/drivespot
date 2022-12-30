import React from 'react'

import {RiSendPlaneFill,RiImageFill} from "react-icons/ri"

export default function Create() {
  return <>
  <div className="createWrapper md:w-[75%] md:mx-auto md:flex md:items-start md:flex-row-reverse">
	<div className="createTextContent md:pt-14 pt-20 px-6 mb-8">
	<p className="sectionLead font-inter font-bold md:pr-10 leading-[1.15] md:leading-[1.25] text-left text-site-darkBlue text-5xl md:text-4xl">Create pages using beautiful components.</p>
	<p className="sectionSubText pl-14 mt-10 font-inter font-normal text-base md:text-sm text-site-createSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
	<button className="learnMore bg-site-createButton ml-14 mt-14 font-inter font-medium text-sm px-8 py-3">Learn More</button>
	</div>
	<div className="createContent md:w-full md:mr-14 md:py-20">
		<div className="createCard w-full flex justify-between">
			<div className="iconWrapper ml-6 w-20 h-20 md:w-16 md:h-16 grid place-content-center bg-site-brightBlue">
				<RiSendPlaneFill className="text-white text-3xl md:text-2xl"/>
			</div>
			<div className="textContent w-[76%] md:w-[80%] pl-8 pr-14 md:pr-0">
				<p className="cardLead font-inter font-bold text-3xl md:text-2xl text-site-darkBlue">Choose<br/> your sections</p>
				<p className="cardSubText font-inter mt-4 font-normal text-base md:text-sm md:pr-0 text-site-darkBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
			</div>
		</div>
		<div className="createCard mt-20 w-full flex justify-between">
			<div className="iconWrapper ml-6 w-20 h-20 md:w-16 md:h-16 grid place-content-center bg-site-brightBlue">
				<RiImageFill className="text-white text-3xl md:text-2xl"/>
			</div>
			<div className="textContent w-[76%] md:w-[80%] pl-8">
				<p className="cardLead font-inter font-bold text-3xl md:text-2xl text-site-darkBlue pr-8 md:pr-5">Add the images and text you need</p>
				<p className="cardSubText font-inter pr-14 mt-4 font-normal md:text-sm md:pr-0 text-base text-site-darkBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
			</div>
		</div>
	</div>
  </div>
	
  </>
}
