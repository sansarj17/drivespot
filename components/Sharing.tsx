import Image from 'next/image'
import React from 'react'

import laptop from "./assets/ds-3.png"

export default function Sharing() {
  return <>
  <div className="sharing-wrapper bg-site-darkBlue">
  	  <p className="heading font-open pt-14 text-center text-4xl uppercase font-normal text-white">sharing on <span className="text-site-lightGreen">steroids</span></p>
	  <p className="text font-open text-center text-light uppercase text-site-greyishWhite opacity-70 text-base mt-8 w-[70ch] opacity-60 mx-auto">Share your photos, videos, songs and documents safely knowing everything you store is automatically private you decide<br></br> what you want to share and with whom you wanna share it.</p>
	  <div className="img-wrapper flex justify-center py-2">
			<Image className="object-cover p-4" src={laptop} alt="Devcies"/>
	  </div>
	  <p className="bottomtext pb-[5rem] text-center font-open uppercase font-semibold text-site-greyishWhite opacity-90 text-xl">Set passwords for any file and folders. <span className="text-site-lightGreen">LEaRN more...</span></p>
  </div>
  </>
}
