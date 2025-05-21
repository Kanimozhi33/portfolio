import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Projects = ()=>{
    return (
        <div class="whole-div bg-black">
            <div className="img bg-white h-[300px]">
                        img
            </div>
            <div className="text-gray-600 mt-10">
                <h1 className="font-oswald text-9xl">01</h1>
                <h2 className="text-teal-400">MEAL MINIT</h2>
                <h2 className="">This is an Online Food Ordering application</h2>
                <p>React, Javascript, Tailwind Css, Redux</p>

            </div>
            <div className="text-gray-400">
                <hr className="text-gray-500"></hr>
                <div className="flex"><FiExternalLink />
                <BsGithub /></div>
            </div>




            <div></div>
        </div>
    )
};

export default Projects;