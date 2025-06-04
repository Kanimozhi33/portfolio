import { IoCall, IoLocationSharp } from "react-icons/io5"; 
import { AiFillMail } from "react-icons/ai";
import { MAIL } from "./Constant";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-oswald text-center text-teal-400 mb-12 drop-shadow-lg opacity-0 animate-in-1">
          Get in Touch
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 opacity-0 animate-in-2">
        
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl flex-1 flex flex-col justify-around">
            <h2 className="text-3xl font-oswald text-teal-400 mb-8 text-center md:text-left">
              Contact Info
            </h2>
            <div className="space-y-8">
              <span className="flex items-center space-x-4">
                <IoCall className="text-4xl text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-400 font-semibold">Phone</h3>
                  <a href="tel:+918489135208" className="text-gray-200 text-xl hover:text-teal-300 transition-colors duration-300">
                    +91 84891 35208
                  </a>
                </div>
              </span>

              <span className="flex items-center space-x-4">
                <AiFillMail className="text-4xl text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-400 font-semibold">Mail</h3>
                  <a href={`${MAIL}`} className="text-gray-200 text-xl hover:text-teal-300 transition-colors duration-300">
                    {"vmkanimozhi9033@gmail.com"}
                  </a>
                </div>
              </span>

              <span className="flex items-center space-x-4">
                <IoLocationSharp className="text-4xl text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-400 font-semibold">Address</h3>
                  <p className="text-gray-200 text-xl">Coonoor, The Nilgiris, India</p>
                </div>
              </span>
            </div>
          </div>

         
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl flex-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-oswald text-teal-400 mb-6 drop-shadow-lg">
              Coffee With Me
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-10">
              Let's connect! Whether you're looking to collaborate on a project,
              discuss ideas, or just have a casual chat about tech, design, or life.
              Feel free to reach out.
            </p>
            <div className="animate-pulse-slow"> 
              <a
                href={`mailto:${MAIL}`}
                className=" inline-flex items-center justify-center bg-teal-600 text-white font-bebas tracking-wide text-2xl px-8 py-4 rounded-full
                 hover:bg-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg "
              >
                SAY HI! <AiFillMail className="ml-3 text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;