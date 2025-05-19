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

import { MAIL } from "./Constant";
import { GiStairsGoal } from "react-icons/gi";



const About = () => {


    const [activeContent,setActiveContent] = useState("education");

    const handleLinkClick = (id) => {
        setActiveContent(id);
    };

    return (
        <div className="bg-black  justify-center items-center flex pt-10">
            <div class="div-container flex-col md:flex-row">
                <div class ="links text-center text-black  font-bebas text-2xl justify-between space-x-5 rounded-2xl">
                    <button onClick={() => handleLinkClick('education')}
            className={`link-div  py-2 px-4 cursor-pointer text-center  rounded-2xl ${
              activeContent === 'education' ? 'bg-teal-500' : "bg-gray-300"
            }`}>Education</button>
                    <button onClick={() => handleLinkClick('skills')}
            className={`link-div py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'skills' ? 'bg-teal-500' : 'bg-gray-300'
            }`}>skills</button>
                    <button onClick={() => handleLinkClick('experience')}
            className={`link-div  py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'experience' ? 'bg-teal-500' : 'bg-gray-300'
            }`}>experience</button>
                    <button onClick={() => handleLinkClick('about-me')}
            className={`link-div py-2 px-4 border border-gray-700 cursor-pointer text-center rounded-2xl ${
              activeContent === 'about-me' ? 'bg-teal-500' : 'bg-gray-300'
            }`}>about me</button>
                    
                </div>
                <div class="contents mt-20">
                    {activeContent === "education" && (<div id="education" class="content-div">
                        
                        <div className="justify-center items-center text-center mt-20 font-oswald">
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
                        <div className="text-center justify-items-center font-oswald mt-20">
                            <h1 className="text-gray-300 text-3xl font-bold"> My Skills</h1>
                            <p className="text-gray-400 text-2xl mt-5">My skills include </p>
                        </div>
                        <div className="text-7xl">
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl  space-x-4 mt-10">
                                <TiHtml5 className="" title="HTML 5"/>
                                
                                <FaCss3Alt title="CSS 3"/>
                                <SiJavascript title="Javascript"/>
                                <FaReact title="React"/>
                            </div>
                            
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl space-x-4 mt-20">
                                <SiPython title="Python" />
                                <SiTailwindcss title="tailwindcss"/>
                                <BsFiletypeJsx title="JSX"/>
                                <SiRedux title="React Redux"/>
                            </div>
                            <div className="bg-gray-500 flex p-5 justify-between rounded-2xl space-x-4 mt-20">
                                <SiVite title="Vite"/>
                                <FaBoxOpen title="Parcel" />
                                <SiNpm title="NPM" />
                            </div>
                        </div>
                        </div>)}
                    {activeContent === "experience" && (<div id="experience" class="content-div">
                        <div className="bg-black text-gray-300 font-oswald mt-20 max-w-[750px] text-center text-2xl p-10">
                            Driven by a keen interest in technology and problem-solving, I've embarked on a journey 
                            to become a web developer following my graduation in Agriculture. While my academic
                             background lies in a different field, my passion for creating engaging and functional 
                             online experiences has led me to actively pursue self-learning in web development.

                        </div>
                        {/* <div>
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div> */}
                    </div>)}
                    {activeContent === "about-me" && (<div id="about-me" class="content-div pt-10 flex md:flex-col">
                        
                        </div>
                        
                    )}
                    
                </div>
                
            </div>
        </div>
    )
};


export default About;