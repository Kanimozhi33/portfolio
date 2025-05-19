import { IoCall } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";
import { AiFillMail } from "react-icons/ai";
import { MAIL} from "./Constant";


const Contact = () =>{
    return (

            <div  class="content-div pt-10 flex md:flex-col bg-black">
                <div className="text-2xl font-oswald space-y-3 p-10">
                    <span className="flex space-x-2">
                        <IoCall className="text-teal-400"/><ul>
                            <li className="text-gray-500">Phone</li>
                            <li className="text-gray-300">+91 84891 35208</li>
                        </ul>
                    </span>
                    
                    <span className="flex space-x-2">
                        <AiFillMail className="text-teal-400" /><ul>
                            <li className="text-gray-500">
                                Mail
                            </li >
                            <li className="text-gray-300">kanimozhi9033vm@gmail.com</li>
                        </ul>
                    </span>
                    <span className="flex space-x-2">
                        <LuMapPinHouse className="text-teal-400"/><ul>
                            <li className="text-gray-500">Address</li>
                            <li className="text-gray-300">Coonoor, The Nilgiris.</li>
                        </ul>
                    </span>
                </div>
                <div className="p-10 font-oswald max-w-[950px]">
                    <h1 className="text-teal-500 text-3xl">Coffee With Me</h1>
                    <p className="text-gray-300 text-center text-2xl">Let's connect! Whether you're looking to collaborate on a project,
                            discuss ideas, or just have a casual chat about tech, design, or life. 
                            Feel free to reach out.</p>
                    <div className="rounded-2xl border mx-auto mt-20 items-center max-w-[150px] text-teal-400 border-teal-400 flex text-center hover:bg-teal-400 hover:text-black justify-center">
                    <a href={MAIL}><span className="font-bebas  flex text-xl p-3">SAY HI! <AiFillMail className="ml-3 "/></span></a>
                    
                    </div>
                </div></div>
    
)};

export default Contact;