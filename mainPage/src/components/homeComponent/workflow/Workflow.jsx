import React from "react";
import "./Workflow.css";
// import Rectangle73 from "../../../img/Rectangle73.png";
import videoPic from "../../../img/videoPic.png";

const Workflow = () => {
  return (
    <div className=" mb-10 p-12 bg-[#219653] ">
      <h1 className="text-4xl font-bold uppercase mb-4 text-center">
        How Harvest Bridge works?
      </h1>
      <p className="text-md font-medium uppercase mb-4 text-white text-center">
        Take a Look at Platform Demo
      </p>
      <div className="flex justify-around mediaQuery items-center text-white">
        <div className="grow">
          <ul className="list-decimal ml-[90px] list-inside">
            <li className="text-2xl mr-4 my-4">Sign-up to the platform.</li>
            <li className="text-2xl mr-4 my-3">
              Explore Different services.
            </li>
            <li className="text-2xl mr-4 my-4">Ask your Questions</li>
            <li className="text-2xl mr-4 my-3">
              Know best crop to grow?
            </li>
            <li className="text-2xl mr-4 my-4">
              Connect to the market 
            </li>
            <li className="text-2xl mr-4 my-3">
             Use your native language
            </li>
            <li className="text-2xl mr-4 my-4">Stay updated .</li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2">
          {/* <img src={Rectangle73} className='youtubeImg' alt="" /> */}
          {/* <img src={videoPic} className="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
