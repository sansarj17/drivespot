/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

import laptop from "./assets/ds-5.png"

export default function Group() {
  return <>
  <div className="sharing-wrapper bg-site-lightGreen">
  	  <p className="heading font-open pt-20 text-center text-4xl uppercase font-normal text-white">ILEDROP it like it's hot!</p>
	  <p className="text font-open text-center text-light uppercase text-white text-base mt-6 w-[65ch] opacity-60 mx-auto">Let your friends, teammates or co-workers drop files right into your firedrive, everything is private with complete<br/> control of all accessibility</p>
	  <div className="img-wrapper flex justify-center">
			<Image className="object-cover px-6 py-4" src={laptop} alt="Devcies"/>
	  </div>
	  <p className="bottomtext pb-[8.5rem] text-center font-open uppercase font-medium text-white opacity-90 text-xl mt-2">create login credentials or let nyone send you something. <span className="text-site-darkBlue text-semibold">LEaRN more...</span></p>
  </div>
  </>
}