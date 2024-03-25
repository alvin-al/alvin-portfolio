import React, { useState } from "react"

const PlaygroundImages = (props) => {
    return (
        <div>
            <div key={props.ind} className="">
                <img src={props.src} alt={props.alt} className="rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30" />
            </div>
        </div>
    )
}

export default PlaygroundImages;