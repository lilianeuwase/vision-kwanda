import React, { useState } from "react";
import { motion } from "framer-motion";

// Static imports for your assets
import image1 from "../../assets/Rwanda11.jpg";
import image2 from "../../assets/Trinity employees.jpg";
import image3 from "../../assets/Rutongo Drilling.jpg";
import image4 from "../../assets/Ntunga Drilling.jpg";
import image5 from "../../assets/Rwanda12.jpg";
import image6 from "../../assets/Musha winch.png";
import image7 from "../../assets/Musha employees.jpg";
import image8 from "../../assets/Machines.jpg";
import image9 from "../../assets/Heza decline.jpg";
import image10 from "../../assets/DSC_4133.jpg";
import image11 from "../../assets/Continious miner.jpg";
import image12 from "../../assets/rwandaTrucks.jpg";
import image13 from "../../assets/teamstanding.jpg";
import image14 from "../../assets/drilling.jpg";
import image15 from "../../assets/teamunderground.jpg";
import image16 from "../../assets/woodenway.jpg";
import image17 from "../../assets/workingundergound.jpg";
import image18 from "../../assets/teamunderground2.jpg";
import image19 from "../../assets/workingstones.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
];

export default function PhotoGallery() {
  // Auto-play: advance every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative mx-auto w-11/12 max-w-7xl h-[750px] overflow-visible my-20">
    
      {/* Gallery Wrapper */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        {/* Image Stack */}
        <div className="relative w-full h-full flex justify-center items-center">
          {images.map((img, i) => {
            let offset = i - index;
            if (offset > images.length / 2) offset -= images.length;
            if (offset < -images.length / 2) offset += images.length;

            const isActive = i === index;
            const zIndex = isActive ? 30 : 20 - Math.abs(offset);

            return (
              <motion.img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                className="absolute object-cover object-center rounded-xl shadow-lg pointer-events-none"
                style={{
                  width: isActive ? "70%" : "40%",
                  height: isActive
                    ? "80%"
                    : `${80 - Math.min(Math.abs(offset) * 10, 30)}%`,

                  zIndex,
                  filter: isActive
                    ? "none"
                    : `blur(${Math.min(
                        Math.abs(offset) * 2,
                        8
                      )}px) grayscale(50%)`,

                  transform: `translateX(${offset * 70}%) scale(${
                    isActive ? 1 : 0.8
                  })`,
                  transition: "all 0.8s ease-in-out",
                  opacity: isActive ? 1 : 0.7,
                }}
              />
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 p-3 bg-black/60 rounded-full hover:bg-black/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 p-3 bg-black/60 rounded-full hover:bg-black/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
