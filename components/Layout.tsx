import React from "react";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <>
            <div className="layout-wrapper relative">
                <Navbar />
                <div className="children">{children}</div>
            </div>
        </>
    );
}
