import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";



const ImageCarousal = ({images,name,description,techStack}) =>{
    
    const [currImageIndex, setCurrImageIndex] = useState(0);

    const nextImage = () => {
        setCurrImageIndex((prevIndex) => (prevIndex+1)% images.length);
         //loop back when the next reaches end
    };

    const prevImage = () => {
        setCurrImageIndex((prevIndex) => {const newIndex =(prevIndex-1 + images.length)%images.length 
            console.log(prevIndex,newIndex);
            return newIndex;
    })
        };
        

    if (!images || images.length === 0){
        return <div className="text-gray-500 text-center">No images to display</div>
    }


const currImage = images[currImageIndex];



return (
    <div className=" flex flex-col md:flex-col lg:flex-row items-center justify-center overflow-hidden lg:items-end">
        <div className=" p-20 1 ">
        <div className="img bg-white relative h-[300px] md:h-[550px] mt-10  justify-center rounded-2xl items-center mx-auto overflow-hidden">
                    <img 
                    src={currImage.src}
                    alt={currImage.alt || 'carousal image'}
                    className="w-[600px] md:w-[800px] h-[300px] md:h-[550px] rounded-2xl transition-opacity duration-500 opacity-100  transform"></img>
        </div>
        <div className=" text-center  justify-center mx-auto  items-center -space-x-96">
        <button className="bg-teal-400  text-center justify-center  items-center mt-10 h-[50px] rounded-xl font-oswald hover:text-xl 
        transform transition-all duration-300 p-4 active:bg-black active:text-teal-400  hover:scale-105 opacity-0 animate-in-1"
        onClick={nextImage} 
        aria-label="Next image">
            <FaCircleArrowRight className="font-bold "/></button> 
        <button className="bg-teal-400 text-center justify-center  items-center mt-10 h-[50px] rounded-xl font-oswald hover:text-xl hover:scale-105
        transform transition duration-300 p-4 active:bg-black active:text-teal-400 opacity-0 animate-in-1"
            onClick={prevImage}
            aria-label= "Previous image"><FaCircleArrowLeft className="font-bold " /></button></div>
        </div>
        <div className="2 text-teal-400 text-opacity-50  items-start lg:self-end lg-pb-20 lg:pl-8 lg:w-auto justify-center font-oswald opacity-0 pl-8
         animate-in-1 transition duration-300 md:pb-20 mb-10 flex flex-col">
           <h2 className="text-9xl md:pl-10">0{currImageIndex +1 }/{images.length}</h2> 
        
        <div className="text-gray-600  flex flex-col">
                        
            <div className=" justify-center items-center px-10 py-5">
                <h2 className="text-teal-400 text-2xl font-bebas">{name}</h2>
                <h2 className=" text-xl">{description}</h2>
                <p>{techStack}</p>
            </div>
                   </div>     
        
            </div>

        </div>
)
};

export default ImageCarousal;

