import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import ss_1 from "./assets/images/ss_1.png";
import ss_2 from "./assets/images/ss_2.png";
import ss_3 from "./assets/images/ss_3.png";
import ss_4 from "./assets/images/ss_4.png";
import ss_5 from "./assets/images/ss_5.png";
import ss_6 from "./assets/images/ss_6.png";

import ImageCarousal from "./ImageCarousal";


const projectData = {
    id:1,
    name:"MEAL MINIT",
    description:"This is an Online Food Ordering application",
    techStack:"React, Javascript, Tailwind Css, Redux",
    images:[
    {id:1, src:ss_1, alt:"Home page"},
    {id:2, src:ss_2, alt:"Restaurant menu"},
    {id:3, src:ss_6, alt:"items"},
    {id:4, src:ss_5, alt:"cart page"},
    {id:5, src:ss_4, alt:"about page"}
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