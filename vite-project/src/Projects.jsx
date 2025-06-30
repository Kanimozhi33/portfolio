import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

import about from "./assets/images/about.png";
import home from "./assets/images/home.png";
import menu_1 from "./assets/images/menu_1.png";
import menu_2 from "./assets/images/menu_2.png";
import cart from "./assets/images/cart.png";
import ImageCarousal from "./ImageCarousal";


const projectData = {
    id:1,
    name:"MEAL MINIT",
    description:"This is an Online Food Ordering application",
    techStack:"React, Javascript, Tailwind Css, Redux",
    images:[
    {id:1, src:home, alt:"Home page"},
    {id:2, src:menu_1, alt:"Restaurant menu"},
    {id:3, src:menu_2, alt:"items"},
    {id:4, src:cart, alt:"cart page"},
    {id:5, src:about, alt:"about page"}
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
                <div className="flex  text-3xl space-x-4 p-8"><a href="https://meal-minit.vercel.app/" ><FiExternalLink /></a>
                <a href="https://github.com/Kanimozhi33"><BsGithub /></a></div>
            </div>




            <div></div>
        </div>
    )
};

export default Projects;
