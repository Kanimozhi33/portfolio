import { useState } from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeJsx } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { FaBoxOpen } from "react-icons/fa";


const About = () => {


    const [activeContent,setActiveContent] = useState("education");

    const handleLinkClick = (id) => {
        setActiveContent(id);
    };

    return (
        <div className="bg-black  justify-center items-center flex pt-20">
            <div class="div-container ">
                <div class ="links text-center text-black  font-kanit text-2xl justify-between space-x-5 rounded-2xl">
                    <button onClick={() => handleLinkClick('education')}
            className={`link-div  py-2 px-4 cursor-pointer text-center  rounded-2xl ${
              activeContent === 'education' ? 'bg-teal-700' : "bg-gray-400"
            }`}>Education</button>
                    <button onClick={() => handleLinkClick('skills')}
            className={`link-div py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'skills' ? 'bg-teal-700' : 'bg-gray-400'
            }`}>skills</button>
                    <button onClick={() => handleLinkClick('experience')}
            className={`link-div  py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'experience' ? 'bg-teal-700' : 'bg-gray-400'
            }`}>experience</button>
                    <button onClick={() => handleLinkClick('about-me')}
            className={`link-div py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'about-me' ? 'bg-teal-700' : 'bg-gray-400'
            }`}>about me</button>
                    
                </div>
                <div class="contents mt-20">
                    {activeContent === "education" && (<div id="education" class="content-div">
                        
                        <div className="justify-center items-center text-center mt-20 font-kanit">
                            <h1 className="text-gray-300 text-3xl font-bold">My Education</h1>
                            <p className="text-gray-400 p-3 text-2xl ">Educational details are given below</p>
                            <div className="rounded-2xl bg-gray-500 p-5 mt-10 text-center text-xl">
                                <p className="font-bold">2020 - 2024</p>
                                <p>Bachelor of Science - Agriculture</p>
                                <p>
                                    Agricultural College and Research Institute - Kudumiyanmalai
                                </p>
                            </div>
                            <div className="rounded-2xl bg-gray-500 p-5 text-center mt-10 text-xl">
                                <p className="font-bold"> 2018 - 2020</p>
                                <p> Maths and Science </p>
                                <p> Cordite Factory Hr. Secondary School </p>
                            </div>
                        </div>
                        
                        agriculture</div>)}
                    {activeContent === "skills" && (<div id="skills" class="content-div">
                        <div className="text-center justify-items-center font-kanit mt-20">
                            <h1 className="text-gray-300 text-3xl font-bold"> My Skills</h1>
                            <p className="text-gray-400 text-2xl mt-5">My skills include </p>
                        </div>
                        <div className="text-7xl">
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl  space-x-4 mt-10">
                                <TiHtml5 />
                                <FaCss3Alt />
                                <SiJavascript />
                                <FaReact />
                            </div>
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl space-x-4 mt-10">
                                <SiPython />
                                <SiTailwindcss />
                                <BsFiletypeJsx />
                                <SiRedux />
                            </div>
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl space-x-4 mt-10">
                                <SiVite />
                                <FaBoxOpen />
                                <SiNpm />
                            </div>
                        </div>
                        </div>)}
                    {activeContent === "experience" && (<div id="experience" class="content-div">
                        <div>

                        </div>
                    </div>)}
                    {activeContent === "about-me" && (<div id="about-me" class="content-div">mobile</div>)}
                    
                </div>
                
            </div>
        </div>
    )
};


export default About;