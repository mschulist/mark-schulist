import Post from "@/components/Post";
import React from "react";


export default async function Page() {
    const path = "blogs/metropolis/metropolis.html";
    return (
        <div>
            <Post path={path} />
        </div>
    )
}