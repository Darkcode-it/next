"use client";

import { Children } from "react";
import React from "react";

interface IContainerProps {
    children: React.ReactNode
}

export default function Container({ children }) {
    return (
        <div className="container mx-auto px-2 sm:px-4 md:px-10 mt-[76px] md:mt-0">
            {children}
        </div>
    )
}