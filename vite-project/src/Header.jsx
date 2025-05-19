
import { MdHome } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaProjectDiagramSolid } from "react-icons/lia";



const Header = () =>{
    return (
        <div className="flex bg-black font-caveat justify-between w-full h-[100px] items-center">
            <div className="name font-bold text-4xl p-10 ml-20 mt-10 text-teal-400 hover:text-gray-300">
                <Link to="/">kanimozhi
                </Link>
                
            </div>
            <div className="flex items-center justify-between w-[350px] text-3xl mr-20 text-teal-400 p-10  mt-10">
                <div className="flex items-center hover:text-gray-300">
                    <Link to="/"><MdHome /> </Link>
                         
                </div>
                <div className="flex items-center hover:text-gray-300">
                    <Link to="/about"><AiFillInfoCircle /></Link>
                    
                </div>
                <div className="className=flex items-center hover:text-gray-300">
                    <Link to="/projects"><LiaProjectDiagramSolid /></Link>
                </div>
                <div className="flex items-center hover:text-gray-300">
                    <Link to="/contact"><IoMdContact /></Link>
                </div>


                
              
            </div>
        </div>
    )
};

export default Header;