import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaProjectDiagramSolid } from "react-icons/lia";



const Header = () =>{
    return (
        <div className="flex bg-black xl:py-12 font-caveat justify-between w-full h-[100px] items-center ">
            <div className="name font-bold text-4xl p-10 ml-20 mt-10 text-teal-400 hover:text-gray-300">
                <Link to="/">kanimozhi<span>.</span>
                </Link>
                
            </div>
            <div className="flex items-center justify-between w-[350px] text-3xl mr-20 text-teal-400 p-10  mt-10">
                <div className="flex items-center ">
                    <NavLink to="/" className={({ isActive}) => 
                        isActive? "font-bold text-gray-300 rounded-xl border border-teal-400 p-1":"hover:text-gray-300"
                    }><MdHome /> </NavLink>
                         
                </div>
                <div className="flex items-center hover:text-gray-300">
                    <NavLink to="/about" className={({ isActive}) => 
                        isActive? " text-gray-300 rounded-xl border border-teal-400 p-1":"hover:text-gray-300"}><AiFillInfoCircle /></NavLink>
                    
                </div>
                <div className="className=flex items-center hover:text-gray-300">
                    <NavLink to="/projects"className={({ isActive}) => 
                        isActive? "font-bold text-gray-300 rounded-xl border border-teal-400 p-1":"hover:text-gray-300"}><LiaProjectDiagramSolid /></NavLink>
                </div>
                <div className="flex items-center hover:text-gray-300">
                    <NavLink to="/contact" className={({ isActive}) => 
                        isActive? "font-bold text-gray-300 rounded-xl border border-teal-400 p-1":"hover:text-gray-300"}><IoMdContact /></NavLink>
                </div>


                
              
            </div>
        </div>
    )
};

export default Header;