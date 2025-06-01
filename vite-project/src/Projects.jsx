import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

import ImageCarousal from "./ImageCarousal";

const images = [
    {id:1, src:"", alt:"01"},
    {id:2, src:"", alt:"02"},
    {id:3, src:"", alt:"03"}
]

const Projects = ()=>{


    const currImage = images[0];

    return (
        <div class="whole-div bg-black">
            <div>
                <ImageCarousal images={images}/>
            </div>
            
            <div className="text-gray-600 mt-10 flex">
                <div>
                    <h1 className="font-oswald text-9xl p-10 ml-10">01</h1>
                </div>
                <div className=" justify-center items-center p-10">
                    <h2 className="text-teal-400 text-2xl font-bebas">MEAL MINIT</h2>
                    <h2 className=" text-xl">This is an Online Food Ordering application</h2>
                    <p>React, Javascript, Tailwind Css, Redux</p>
                </div>
                

            </div>
            <div className="text-gray-400 ">
                <hr className="text-gray-500 opacity-50 text-4xl"></hr>
                <div className="flex  text-3xl space-x-4 p-8"><a href="" ><FiExternalLink /></a>
                <a href="https://github.com/Kanimozhi33"><BsGithub /></a></div>
            </div>




            <div></div>
        </div>
    )
};

export default Projects;