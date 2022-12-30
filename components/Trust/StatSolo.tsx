import React from "react";

interface IProps {
    lead: string;
    subLead: string;
    subText: string;
}

export default function StatSolo({ lead, subLead, subText }: IProps) {
    return (
        <>
            <div className="statsSolo text-center mt-14">
                <p className="leadingText text-4xl font-inter font-bold tracking-wide">
                    {lead}
                </p>
                <p className="subLead font-inter font-medium text-base mt-2">
                    {subLead}
                </p>
                <p className="subText font-normal mt-1 font-inter text-base text-site-lightText">{subText}</p>
            </div>
        </>
    );
}
