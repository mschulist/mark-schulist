"use client"
import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function JuliaBlog() {
    return (
        <div>
            <IframeResizer 
                src="/julia.html" 
                style={{width: '1px', minWidth: '100%'}}
                checkOrigin={false}
                height={"2000"}
            />
        </div>
    )
}