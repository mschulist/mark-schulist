"use client"
import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function CNNBlog() {
    return (
        <div>
            <IframeResizer 
                src="/cnn.html" 
                style={{width: '1px', minWidth: '100%'}}
                checkOrigin={false}
                height={"2000"}
            />
        </div>
    )
}