"use client"
import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function MetropolisBlog() {
    return (
        <div>
            <IframeResizer 
                src="/metropolis.html" 
                style={{width: '1px', minWidth: '100%'}}
                checkOrigin={false}
            />
        </div>
    )
}