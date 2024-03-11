import React, { useState } from "react";
import { Lightbox } from "react-modal-image";


const PlaygroundImages = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => {
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div key={props.ind} className="">
                <img src={props.src} alt={props.alt} className="rounded-sm hover:scale-95 hover:opacity-90 transition ease-in-out delay-100" onClick={openLightbox}/>
            </div>
        {isOpen && (
        <Lightbox medium={props.src} small={props.src} alt={props.alt} onClose={closeLightbox} hideDownload="true" hideZoom="true"
        />
      )};
        </>
    )
}

export default PlaygroundImages;