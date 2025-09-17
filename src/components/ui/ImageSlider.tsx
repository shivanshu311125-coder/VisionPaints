import {useEffect, useState} from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import paint1 from "@/assets/images/paint1.jpg";
import paint2 from "@/assets/images/paint2.png";
import paint3 from "@/assets/images/paint3.png";
import paint4 from "@/assets/images/paint4.jpg";

const images = [
   paint1,
   paint2,
   paint3,
   paint4

];
export default function ImageSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((prev) => (prev +1) % images.length);
    }, 3000);
        return () => clearInterval(intervalId);
    }, []);


    const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
     };

    const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
     };



        
    
  return (
    <div className='relative w-full h-[400px] overflow-hidden rounded-3xl shadow-lg'>
        <div 
        className=' flex transition-transform duration-700 ease-in-out'
        style={{transform : ` translateX(-${current * 100}%)`}}
        >
            {images.map((src, index) => (
            <img
            key= {index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="min-w-full h-[400px] object-cover "
            
            />
            ))}
        </div>

        
        <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>

    
  );
}

