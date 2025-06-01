import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
const ImageCarousal = ({images}) =>{
    

    const [currImageIndex, setCurrImageIndex] = useState(0);

    const nextImage = () => {
        setCurrImageIndex((prevIndex) => (prevIndex+1)% images.length); //loop back when the next reaches end
    };

    const prevImage = () => {
        setCurrImageIndex((prevIndex) => (prevImage-1 + images.length)%images.length);
    }

    if (!images || images.length === 0){
        return <div className="text-gray-500 text-center">No images to display</div>
    }


const currImage = images[currImageIndex];



return (
    <div className=" space-x-20 p-20">
                <div>
                <div className="img bg-white h-[500px] mt-10 max-w-[800px] justify-center items-center mx-auto">
                          <img 
                          src={currImage.src}
                          alt={currImage.alt || 'carousal image'}
                          className=""></img>
                </div>
                <div className=" text-center mt-5 justify-center mx-auto  items-center -space-x-96">
                <button className="bg-teal-400 text-center justify-center  items-center mt-10 h-[50px] rounded-xl font-oswald hover:text-xl 
                transform transition-all duration-300 p-4 active:bg-black active:text-teal-400 hover:scale-105"
                onClick={prevImage} 
                aria-label="Previous image">
                    <FaCircleArrowRight className="font-bold "/></button> 
                <button className="bg-teal-400 text-center justify-center  items-center mt-10 h-[50px] rounded-xl font-oswald hover:text-xl hover:scale-105
                transform transition duration-300 p-4 active:bg-black active:text-teal-400"
                 onClick={nextImage}
                 aria-label= "Next image"><FaCircleArrowLeft className="font-bold " /></button></div>
                </div>
                <div className="text-white">
                    {currImageIndex +1}/{images.length}
                </div>

                </div>
)
};

export default ImageCarousal;

