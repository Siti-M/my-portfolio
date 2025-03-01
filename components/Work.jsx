import { assets, workData } from "@/assets/assets";
import React, { useState } from "react";

const Work = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === workData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="work" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-SpaceGrotesk">My Work</h2>
      <p className="max-w-2xl mt-4 mb-10 font-SpaceGrotesk text-center">
        Welcome to my portfolio! Explore my projects collection.
      </p>

      {/* Project Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 w-full">
        <div className="order-1 md:order-2 flex justify-center md:justify-start px-6">
          {/* Image */}
          <div className="group w-56 h-56 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-lg relative">
            <div
              className="w-full h-full bg-no-repeat bg-cover bg-center transition-transform duration-300 ease-out transform scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${workData[currentIndex].bgImage})` }}/>
            </div>
          </div>

        <div className="order-2 md:order-1 flex flex-col justify-between h-full px-6 md:px-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold">{workData[currentIndex].title}</h2>

            <ul className="mt-4 space-y-3">
              {workData[currentIndex].description.map((line, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Icon */}
                  <span className="w-6 h-6 flex items-center justify-center text-dark dark:text-white rounded-full shadow-md animate-bounce">
                    ✔
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">{line}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto w-full">
            {/* Separator Line */}
            <hr className="w-full border-t border-gray-300 my-4 dark:border-gray-600" />

            {/* Detail */}
            <div className="flex flex-wrap gap-2">
              {workData[currentIndex].detail.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-black dark:text-white text-sm rounded-lg shadow-md border 
                        border-[#5e5548] dark:border-[#a89e90]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full 
          shadow-md backdrop-blur-md bg-white/30 dark:bg-black/30 text-lg font-SpaceGrotesk font-semibold transition 
          hover:scale-110 hover:bg-white/50 dark:hover:bg-black/50">
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full 
          shadow-md backdrop-blur-md bg-white/30 dark:bg-black/30 text-lg font-SpaceGrotesk font-semibold transition 
          hover:scale-110 hover:bg-white/50 dark:hover:bg-black/50">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Work;
