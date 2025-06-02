import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

import ImageCarousal from "./ImageCarousal";


const projectData = {
    id:1,
    name:"MEAL MINIT",
    description:"This is an Online Food Ordering application",
    techStack:"React, Javascript, Tailwind Css, Redux",
    images:[
    {id:1, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5A0h-4DPOFKFh1p2JW3Brs1nkJ3cIBOTsvw&s", alt:"01"},
    {id:2, src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaIiFIfdlnXsHlqt_elPP_jDuDNPxvZeIKA&s", alt:"02"},
    {id:3, src:"https://telefe-static.akamaized.net/media/18244314/tlf_edayserkan_eda.jpg?width=600&height=500&mode=crop&anchor=top", alt:"03"}
],
}
const Projects = ()=>{


    const currProject = projectData;


    return (
        <div className="whole-div bg-black">
            <div className="rounded-2xl">
                <ImageCarousal images={currProject.images} name={currProject.name} description={currProject.description}
                techStack={currProject.techStack}/>
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