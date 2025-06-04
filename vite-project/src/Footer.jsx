import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom"; 
import { LINKED_IN, GITHUB, MAIL } from "./Constant";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="bg-black text-white py-10 ">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center space-x-8 text-4xl mb-8">
          <a
            href={GITHUB}
            title="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-gray-300 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <BsGithub />
          </a>
          <a
            href={LINKED_IN}
            title="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-gray-300 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href={`${MAIL}`} 
            title="Mail me"
            className="text-teal-400 hover:text-gray-300 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <AiFillMail />
          </a>
        </div>

        
        <div className="text-center text-sm mb-6 text-gray-400 font-light">
          <p>Crafting digital experiences with passion and precision.</p>
          
        </div>

        
        <div className="flex items-center justify-center text-sm text-gray-500 font-light space-x-1">
          <AiFillCopyrightCircle className="text-base" />
          <span>{currentYear} Kanimozhi. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;