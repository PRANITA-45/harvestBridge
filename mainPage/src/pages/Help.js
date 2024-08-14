import React from "react";

//Components
import ExpandDropdown from "../components/expandText";

const Help = () => {
  const booking_help = [
    {
      heading: "Q: How do I buy seeds from Harvest Bridge",
      content:
        "A: You can search and by available seeds in your location.",
    },
    {
      heading: "Q: How do I buy seeds from Harvest Bridge",
      content:
        "A: You can search and by available seeds in your location.",
    },
  ];
  const renting_help = [
    {
      heading: "Q: How do I buy seeds from Harvest Bridge",
      content:
        "A: You can search and by available seeds in your location.",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#68AC5D] p-9 content-center">
        <h1 className="font-bold text-5xl text-center text-white m-8">
          How can we Help?
        </h1>
      </div>
      <div className="bg-white rounded-2xl mx-auto w-11/12 p-9 -translate-y-8 flex justify-center shadow-lg">
        <div style={{ width: "45%" }} className="text-center">
          {/* <h1 className="text-xl font-semibold">Booking Help</h1> */}
          {booking_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
        <div style={{ width: "45%" }} className="text-center w-100">
          {/* <h1 className="text-xl font-semibold">Renting Help</h1> */}
          {renting_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <div className="w-100">
        <div className="p-9 flex w-screen">
          <h1 className="text-xl mr-5 font-semibold">Still need help?</h1>
          <button className="px-6 py-1 rounded-lg ml-auto text-white text-xl font-semibold hover:bg-green-700 bg-[#68AC5D]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
