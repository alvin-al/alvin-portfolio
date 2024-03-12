import React, { useState } from "react"
import { Lightbox } from "react-modal-image"


const PlaygroundImages = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => {
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div key={props.ind} className="">
                <img src={props.src} alt={props.alt} className="rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30" onClick={openLightbox}/>
            </div>
        {isOpen && (
        <img src={props.src}/>
      )}
        </div>
    )
}

export default PlaygroundImages;