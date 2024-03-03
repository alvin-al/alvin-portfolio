import React from "react";
import EmailForm from "./EmailForm";

const GetInTouchSection = () =>{
    return(
        <div id="getintouch">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Get In Touch</h2>
            <p className="text-left text-white text-base py-8 lg:pl-[55%]  xl:pl-[60%] xl:text-lg mb-8">If you like my work or have any questions, feel free to contact me directly. I would love to hear from you and discuss your web development needs. You can reach me by email.</p>
            <div>
                <EmailForm />
            </div>
        </div>
    )
};




export default GetInTouchSection;