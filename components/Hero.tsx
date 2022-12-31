import Image from 'next/image'
import React from 'react'

import heroCloud from "./assets/hero img.png"

export default function Hero() {
  return <>
  <div className="hero-wrapper text-center">
	  <h1 className="font-open pt-16 mx-auto font-semibold w-[33ch] text-white text-[2.4rem] uppercase italic">Easily store & share your big files with anyone</h1>
	  <div className="img-wrapper pt-12 w-full grid place-content-center">
		  <Image className="w-64 object-cover" src={heroCloud} alt="Cloud"/>
	  </div>
	  <div className="bottom-text-content mt-4">
		  <p className="head1 font-open mx-auto font-semibold w-[33ch] text-white text-[2.4rem] uppercase italic">get 20GB free</p>
		  <p className="text font-open mx-auto font-semibold text-2xl text-white uppercase italic">Press on the cloud or drag & drop anywhere on this screen to start</p>
		  <div className="cta-buttons flex items-center justify-center mt-12">
			  <button className="border-[1px] border-site-lightGreen px-16 text-white font-open py-2 mr-4">Login</button>
			  <button className="border-[1px] border-site-lightGreen bg-site-lightGreen px-16 text-white font-open py-2">Upload</button>
		  </div>
		  <div className="iconWrapper pr-3 pb-4 flex justify-center">
			  <div className="blank rounded-full mt-14 opacity-60 w-7 h-7 grid place-content-center text-white border-2 border-white">i</div>
		  </div>
	  </div>
  </div>

  </>
}
