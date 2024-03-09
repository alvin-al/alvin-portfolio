import React from 'react';


function WorkPictures ({src, title}){
    return(
        <div className='mb-8'>
            <img src={src} alt="src" />
            <h2 className="font-syne font-extrabold text-2xl text-left text-white my-2">{title}</h2>
        </div>
    );
};

export default WorkPictures;