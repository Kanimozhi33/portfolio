import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { LINKED_IN } from "./Constant";
import { GITHUB } from "./Constant";
import { MAIL } from "./Constant";
import { Link } from "react-router-dom";

const Footer =()=>{
    return (<div className="bg-black">
              <div className=" items-center space-x-10  text-3xl text-teal-400 max-w-[300px ] mx-auto bg-black">
                <div className="flex items-center space-x-10 justify-center mt-20">
                <a href={GITHUB} title="Github profile"><BsGithub  className="hover:text-gray-300"/></a>
                <a href={LINKED_IN} title="LinkedIn profile "><FaLinkedin  className="hover:text-gray-300" /></a>
                <a href={MAIL} title="Mail me"><AiFillMail   className="hover:text-gray-300"/></a>
                </div>
               

               <div className="text-sm items-center flex mt-20 p-4 text-center justify-center font-thin space-x-2"> 
                <AiFillCopyrightCircle />
                2025  Kanimozhi </div>
            </div></div>
    )
};

export default Footer;