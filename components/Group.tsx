import Image from 'next/image'
import React from 'react'

import laptop from "./assets/ds-4.png"

export default function Group() {
  return <>
  <div className="sharing-wrapper bg-site-greyishWhite">
  	  <p className="heading font-open pt-14 text-center text-4xl uppercase font-normal text-site-lightGreen">Groups for the people</p>
	  <p className="text font-open text-center text-light uppercase text-site-lightDarkBlue text-base mt-6 w-[75ch] opacity-60 mx-auto">Use groups to private share your files between friends, family or co-workers. chat & collaborate with members and control who does what.</p>
	  <div className="img-wrapper flex justify-center py-2">
			<Image className="object-cover px-6 py-4" src={laptop} alt="Devcies"/>
	  </div>
	  <p className="bottomtext pb-[5.25rem] text-center font-open uppercase font-semibold text-site-lightDarkBlue opacity-90 text-xl mt-2">Add as many people and space as you need. <span className="text-site-lightGreen">LEaRN more...</span></p>
  </div>
  </>
}
