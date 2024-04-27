import React from "react";
import EmailForm from "../Elements/EmailForm";
import github from "../../assets/icon/github.svg"
import gmail from "../../assets/icon/gmail.svg"
import linkedin from "../../assets/icon/linkedin.svg"


const emailDescription = "If you like my work or have any questions, feel free to contact me directly. I would love to hear from you and discuss your web development needs. You can reach me by email.";

const EmailSection = () =>{
    return(
        <div id="getintouch">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Get In Touch</h2>
            <p className="pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg">{emailDescription}</p>
            <div>
                <EmailForm />
                <div className="flex flex-row justify-center md:justify-start gap-3 md:gap-6 lg:pl-[55%] xl:pl-[60%] md:px-52 md:items-start mt-24">
                    <a href="https://github.com/alvin-al"><button className="hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center"><img src={github} alt="github"/></button></a>
                    <a href="mailto:alvvxal@gmail.com"><button className="hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center"><img src={gmail} alt="gmail"/></button></a>
                    <a href="https://www.linkedin.com/in/alvinxal/"><button className="hover:bg-slate-700 border border-white w-12 h-12 rounded-full flex justify-center items-center"><img src={linkedin} alt="linkedin"/></button></a>
                </div>
            </div>
           
        </div>
    )
};




export default EmailSection;