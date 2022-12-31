import Image from 'next/image'
import React from 'react'

import laptop from "./assets/ds-6.png"

export default function Publish() {
  return <>
  <div className="sharing-wrapper bg-white">
  	  <p className="heading font-open pt-20 text-center text-4xl uppercase font-normal text-site-lightGreen">Publish your private files to the public</p>
	  <p className="text font-open text-center text-light uppercase text-site-lightDarkBlue text-sm mt-6 w-[75ch] opacity-60 mx-auto">Put your photos, videos, songs & documents out there for the world to see. Have others follow you and keep up with your file activity.</p>
	  <div className="img-wrapper flex justify-center py-2">
			<Image className="object-cover px-12 translate-x-2 py-4" src={laptop} alt="Devcies"/>
	  </div>
	  {/* <p className="bottomtext pb-[5.25rem] text-center font-open uppercase font-semibold text-site-lightDarkBlue opacity-90 text-xl mt-2">Add as many people and space as you need. <span className="text-site-lightGreen">LEaRN more...</span></p> */}
  </div>
  </>
}