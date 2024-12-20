import React, { useState, useEffect } from 'react';
import jobbanner from "../../../../public/jobbanner.png"

const Banner = () => {
  const [jobsFilled, setJobsFilled] = useState(0);
  const [peopleHired, setPeopleHired] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  const animateCounter = (target, setter) => {
    let count = 0;
    const increment = Math.ceil(target / 100); // Adjust the speed of increment
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        setter(target); // Set final value
      } else {
        setter(count);
      }
    }, 30); // Adjust speed of animation (in ms)
  };

  useEffect(() => {
    animateCounter(1000, setJobsFilled); // Set target number for jobs filled
    animateCounter(5000, setPeopleHired); // Set target number for people hired
    animateCounter(15000, setTotalJobs); // Set target number for total jobs
  }, []);

  return (
<div 
  className="relative bg-cover bg-center h-[500px] rounded-lg overflow-hidden my-4" 
  style={{ backgroundImage: `url(${jobbanner.src})` }}
>      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-semibold mb-4 drop-shadow-lg text-white tracking-wide">Welcome to Your Dream Job</h1>
        <p className="text-lg mb-8 drop-shadow-lg tracking-wide">Find the best opportunities tailored just for you. Start your journey now!</p>
        
        {/* Stats Section */}
        <div className="flex gap-10 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{jobsFilled}+</h2>
            <p className="text-sm">Jobs Filled</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{peopleHired}+</h2>
            <p className="text-sm">People Hired</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{totalJobs}+</h2>
            <p className="text-sm">Total Jobs Available</p>
          </div>
        </div>
        
        {/* Button */}
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-8 rounded-full text-lg hover:from-blue-500 hover:to-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
