import React from "react";
import EmailForm from "../Elements/EmailForm";

const emailDescription = "If you like my work or have any questions, feel free to contact me directly. I would love to hear from you and discuss your web development needs. You can reach me by email.";

const EmailSection = () =>{
    return(
        <div id="getintouch">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Get In Touch</h2>
            <p className="pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg">{emailDescription}</p>
            <div>
                <EmailForm />
            </div>
        </div>
    )
};




export default EmailSection;