import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";



const Body = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col max-w-2xl w-full bg-gray-800 rounded-2xl font-kanit min-h-[400px] p-8 md:p-12 shadow-xl opacity-0 animate-in-1">
        {/* 'opacity-0' initially to hide it, then 'animate-in-1' makes it appear */}
        <div className="text-center text-gray-300 mt-10 md:mt-20 font-bold opacity-0 animate-in-2">
          {/* 'opacity-0' initially, then 'animate-in-2' after 0.2s delay */}
          <h1 className="text-xl md:text-2xl">Software Engineer</h1>
          <p className="text-4xl md:text-5xl mt-2">
            Hello I'm <span className="text-teal-400">Kanimozhi VM</span>
          </p>
        </div>
        <div className="text-center text-gray-300 mt-8 md:mt-10 opacity-0 animate-in-3">
          {/* 'opacity-0' initially, then 'animate-in-3' after 0.4s delay */}
          <p className="mx-auto max-w-[500px] text-lg md:text-xl leading-relaxed">
            A frontend developer who loves crafting sleek, user-friendly web experiences. Check out my portfolio,
            and let's connect!
          </p>
        </div>
        <div
          className="text-center mt-12 md:mt-16 font-bold rounded-full bg-teal-500 flex items-center text-xl
                     justify-center px-10 h-[50px] mx-auto max-w-xs opacity-0 animate-in-3 hover:bg-teal-400 
                     transition-all duration-300 hover:scale-110 transform ease-in-out shadow-lg"
          // You'd need to define animate-in-4 with an even longer delay
        >
          <Link
            to=""
            className="flex items-center text-gray-900
                       hover:scale-105 transform duration-300 ease-in-out"
          >
            <IoMdDownload className="mr-3 text-2xl" /> CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;


















