import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom"
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";


const Body = () => {
    return (
        <div className="flex flex-col  bg-black font-kanit  h-screen">
            <div className="text-center text-gray-300 mt-20 font-bold">
                <h1 className="text-xl">Software Engineer</h1>
                <p className="text-5xl">Hello I'm <span className="text-teal-400">Kanimozhi VM</span></p>
            </div>
            <div className="text-center text-gray-300 mt-10 ">
                <p className=" mx-auto max-w-[500px] items-center font-2xl">
                    A frontend developer who loves crafting sleek,
                    user friendly web experiences. Check out my portfolio, 
                    and let's connect!
                </p>
            </div>
            <div className="text-center mt-10 rounded-2xl bg-gray-300 flex items-center text-xl
                             justify-center w-[200px] h-[50px] mx-auto hover:bg-teal-400"> <Link to="" className="flex items-center">
                Download CV <HiOutlineExternalLink className="ml-4"/></Link>
            </div>
            <div className=" items-center space-x-10  text-3xl text-teal-400 max-w-[300px ] mx-auto">
                <div className="flex items-center space-x-10 justify-between mt-20"> <BsGithub  className="hover:text-gray-300"/>
                <FaLinkedin  className="hover:text-gray-300" />
                <AiFillMail   className="hover:text-gray-300"/></div>
               

               <div className="text-sm items-center flex mt-20 p-4 text-center  font-thin space-x-2"> 
                <AiFillCopyrightCircle />
                <span className="">2025 </span> <span> Kanimozhi</span> </div>
            </div>
        </div>
    )
};

export default Body;