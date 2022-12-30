import React from "react";
import Image from "next/image";

import videoImage from "./assets/videoImage.png"

export default function Video() {
    return (
        <>
		<div className="videoSectionWrapper mt-36">
			<p className="sectionTitle text-sm px-16 font-bold tracking-widest text-site-darkBlue opacity-60 font-inter">VIDEO TITLE</p>
            <p className="sectionLead px-6 mt-14 font-inter font-bold leading-[1.15] text-left text-site-darkBlue text-5xl">Inform users with video sections</p>
            <div className="p-6 mt-10">
                <Image className=" object-cover w-full h-72" src={videoImage} alt="Video Image" />
            </div>
			<p className="lorem font-inter pl-6 pr-8 text-lg font-normal leading-loose">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida, tortor cursus scelerisque vestibulum, turpis justo accumsan felis, sit amet lobortis turpis elit eu metus.
			</p>
		</div>
            
        </>
    );
}
