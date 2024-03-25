import React from 'react';


function WorkPictures ({src, title, link}){
    return(
        <div className='mb-8'>
            <a href={link}>
                <img src={src} alt={title} className='cursor-pointer rounded-sm hover:scale-[97%] hover:opacity-90 transition ease-in-out delay-30'/>
            </a>
            <h2 className="font-syne font-extrabold text-2xl text-left text-white my-2">{title}</h2>
        </div>
    );
};

export default WorkPictures;