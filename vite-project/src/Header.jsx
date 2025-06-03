import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }




    return (
        <div className="flex bg-black xl:py-12 font-oswald justify-between w-full h-[100px] items-center relative z-20 ">
            <div className="name font-bold text-2xl md:text-4xl p-5 sm:p-8 md:p-10 ml-4 sm:ml-8 md:ml-10 lg:ml-20 text-gray-500 transition-colors duration-200 opacity-0 animate-in-1">
                <Link to="/">kanimozhi<span className="text-teal-600">.</span>
                </Link>
                
            </div>

            <div className="md:hidden pr-4"> 
            <button onClick={toggleMenu} aria-label="Toggle navigation menu" className="text-teal-400 text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            </div>

            <div className=" items-center  justify-between w-[350px] text-3xl mr-20 text-teal-400 p-10  mt-10 hidden md:flex pr-4 md:p-10 md:pr-10 lg:mr-20">
                <div className="flex items-center opacity-0 animate-in-1">
                    <NavLink to="/" className={({ isActive}) => 
                        isActive? "font-bold text-gray-300  p-1":"hover:text-gray-300 transition-all transform duration-300"
                    }><MdHome /> </NavLink>
                         
                </div>
                <div className="flex items-center hover:text-gray-300 opacity-0 animate-in-1  ">
                    <NavLink to="/about" className={({ isActive}) => 
                        isActive? " text-gray-300  p-1":"hover:text-gray-300 transition-all transform duration-300"}><AiFillInfoCircle /></NavLink>
                    
                </div>
                <div className="className=flex items-center hover:text-gray-300 opacity-0 animate-in-1">
                    <NavLink to="/projects"className={({ isActive}) => 
                        isActive? "font-bold text-gray-300  p-1":" hover:text-gray-300 transition-all transform duration-300"}><LiaProjectDiagramSolid /></NavLink>
                </div>
                <div className="flex items-center hover:text-gray-300 opacity-0 animate-in-1">
                    <NavLink to="/contact" className={({ isActive}) => 
                        isActive? "font-bold text-gray-300  p-1":"hover:text-gray-300 transition-all transform duration-300"}><IoMdContact /></NavLink>
                </div>

             </div>

            {isMenuOpen && (


                <div className="md:hidden fixed inset bg-black ">
            <div className="md:hidden fixed inset-0  bg-gray-700   bg-opacity-95
             flex flex-col items-center justify-center space-y-6 text-2xl text-teal-400 z-40"
          onClick={toggleMenu}>
            <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-gray-300 py-4"
                : "hover:text-gray-300 transition-colors duration-300 py-4 "
            }
          >
            <MdHome /> Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 py-4"
                : "hover:text-gray-300 transition-colors duration-300 py-4"
            }
          >
            <AiFillInfoCircle /> About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-gray-300 py-4"
                : "hover:text-gray-300 transition-colors duration-300 py-4"
            }
          >
            <LiaProjectDiagramSolid /> Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-gray-300 py-4"
                : "hover:text-gray-300 transition-colors duration-300 py-4"
            }
          >
            <IoMdContact /> Contact
          </NavLink>
          </div></div>
            )}
        </div>
    )
};

export default Header;