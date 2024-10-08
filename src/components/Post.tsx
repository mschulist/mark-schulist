"use client";
import React, { useState } from "react";
import IframeResizer from "@iframe-resizer/react";
import { Meteors } from "./ui/meterors";

export default function Post({ path }: { path: string }) {
  const [loading, setLoading] = useState(true);
  const url = `https://f005.backblazeb2.com/file/mark-schulist/${path}`;

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div>
          <Meteors />
        </div>
      )}
      <IframeResizer
        src={url}
        style={{
          width: "1px",
          minWidth: "100%",
          opacity: loading ? 0 : 1, // use opacity instead of display
        }}
        license="GPLv3"
        scrolling={false}
        onLoad={handleLoad}
      />
    </div>
  );
}
