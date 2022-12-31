import Image from 'next/image'
import React from 'react'

import devices from "./assets/drivespot-2.png"

export default function Whenever() {
  return <>
  <div className="whenever-wrapper bg-site-greyishWhite">
	  <p className="heading font-open pt-14 text-center text-4xl uppercase font-normal text-site-darkBlue">whenever, <span className="text-site-lightGreen">wherever</span></p>
	  <p className="text font-open text-center text-normal uppercase text-site-lightDarkBlue text-base mt-8 w-[70ch] mx-auto">Place your files on firedrive and access them from any of your devices. share and manage them whenever you want, wherever you go</p>
	  <div className="img-wrapper flex justify-center py-6">
			<Image className="object-cover " src={devices} alt="Devcies"/>
	  </div>
	  <p className="bottomtext pb-[5.5rem] text-center font-open uppercase font-semibold text-site-lightDarkBlue text-xl"><span className="text-site-lightGreen">DRIVE spot</span> for the web, on any device.</p>
  </div>
  </>
}
