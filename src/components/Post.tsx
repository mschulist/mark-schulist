"use client"
import React, { useRef, useEffect } from 'react';
import IframeResizer from "iframe-resizer-react";

export default function Post({ path }: { path: string }) {

    const url = `https://f005.backblazeb2.com/file/mark-schulist/${path}`;


    return (
        <div>
            <IframeResizer
                src={url}
                style={{ width: "1px", minWidth: "100%"}}
                minHeight={1500}
                scrolling={false}
            />
        </div>
    );
}