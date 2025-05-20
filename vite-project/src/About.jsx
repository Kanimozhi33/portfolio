import { useState } from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeJsx } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import "./App.css";
// import { SiVite } from "react-icons/si";
// import { SiNpm } from "react-icons/si";
// import { FaBoxOpen } from "react-icons/fa";

// import { MAIL } from "./Constant";
// import { GiStairsGoal } from "react-icons/gi";

const About = () => {
const [activeContent, setActiveContent] = useState("education");

const handleLinkClick = (id) => {
setActiveContent(id);
};

return (
<div className="bg-black  py-16 justify-center items-center  my-auto px-20">
<div className="container mx-auto px-4  md:px-8">
<div className="flex  flex-col md:flex-row justify-center gap-10">
{/* Navigation Links */}
<div className="md:w-1/4 flex flex-col items-center ">
<div className="bg-gray-800 rounded-lg shadow-md p-4 md:p-6 w-full">
<h2 className="font-bebas text-3xl text-teal-400 mb-4 text-center md:text-left">
Explore
</h2>
<div className="flex flex-col space-y-2">
<button
onClick={() => handleLinkClick("education")}
className={`py-2 px-4 rounded-md text-lg font-semibold cursor-pointer text-gray-200 ${ activeContent === "education" ? "bg-teal-500" : "bg-gray-700 hover:bg-gray-600" }`}
>
Education
</button>
<button
onClick={() => handleLinkClick("skills")}
className={`py-2 px-4 rounded-md text-lg font-semibold cursor-pointer text-gray-200 ${activeContent === "skills" ? "bg-teal-500" : "bg-gray-700 hover:bg-gray-600"}`}
>
Skills
</button>
<button
onClick={() => handleLinkClick("experience")}
className={`py-2 px-4 rounded-md text-lg font-semibold cursor-pointer text-gray-200 ${ activeContent === "experience" ? "bg-teal-500" : "bg-gray-700 hover:bg-gray-600" }`}
>
Experience
</button>
<button
onClick={() => handleLinkClick("about-me")}
className={`py-2 px-4 rounded-md text-lg font-semibold cursor-pointer text-gray-200 ${ activeContent === "about-me" ? "bg-teal-500" : "bg-gray-700 hover:bg-gray-600" }`}
>
About Me
</button>
</div>
</div>
</div>

      {/* Content Area */}
      <div className="md:w-2/4  ">
        {activeContent === "education" && (
          <div id="education" className="content-div bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-oswald text-3xl text-teal-400 font-bold mb-6">My Education</h2>
            <p className="text-gray-300 text-lg mb-4">Educational details are given below:</p>
            <div className="bg-gray-700 rounded-lg p-5 mb-6">
              <p className="font-semibold text-xl text-gray-200 mb-2">2020 - 2024</p>
              <p className="text-gray-300 text-lg">
                Bachelor of Science.(honours) Agriculture - <span className="text-teal-400">85%</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Agricultural College and Research Institute (TNAU constituent) - Kudumiyanmalai
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-5">
              <p className="font-semibold text-xl text-gray-200 mb-2">2018 - 2020</p>
              <p className="text-gray-300 text-lg">
                Maths and Science - <span className="text-teal-400">89%</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">Cordite Factory Hr. Secondary School</p>
            </div>
          </div>
        )}

        {activeContent === "skills" && (
          <div id="skills" className="content-div bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-oswald text-3xl text-teal-400 font-bold mb-6">My Skills</h2>
            <p className="text-gray-300 text-lg mb-6">My skills include:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-5xl md:text-6xl">
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <TiHtml5 className="text-teal-400" title="HTML 5" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <FaCss3Alt className="text-teal-400" title="CSS 3" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiJavascript className="text-teal-400" title="Javascript" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <FaReact className="text-teal-400" title="React" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiPython className="text-teal-400" title="Python" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiTailwindcss className="text-teal-400" title="tailwindcss" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <BsFiletypeJsx className="text-teal-400" title="JSX" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiRedux className="text-teal-400" title="React Redux" />
              </div>
              {/* <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiVite className="text-teal-400" title="Vite" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <FaBoxOpen className="text-teal-400" title="Parcel" />
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <SiNpm className="text-teal-400" title="NPM" /> */}
              {/* </div> */}
            </div>
          </div>
        )}

        {activeContent === "experience" && (
          <div id="experience" className="content-div bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-oswald text-3xl text-teal-400 font-bold mb-6">My Experience</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Driven by a keen interest in technology and problem-solving, I've embarked on a journey to
              become a web developer following my graduation in Agriculture. While my academic background
              lies in a different field, my passion for creating engaging and functional online experiences
              has led me to actively pursue self-learning in web development.
            </p>
            {/* You can add more specific experience details here, perhaps as a list or timeline */}
          </div>
        )}

        {activeContent === "about-me" && (
          <div id="about-me" className="content-div bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-bebas text-3xl text-teal-400 font-bold mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi, I am a frontend developer with a love for crafting sleek web experiences. Outside of
              coding, I enjoy football, movies, music, and editing with Photoshop and Premiere Pro.
              Let’s connect and chat about tech or any of my favorite hobbies!
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
);
};

export default About;