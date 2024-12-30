import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col relative items-center" id="solution">
      <div className="absolute xl:left-0 gap-5 xl:py-24 xl:h-full flex flex-col items-center justify-evenly md:w-full xl:w-1/2  h-1/2">
      <Card title="Unleashing Quantum Power" desc="Proprietary quantum chips with unmatched processing speed."/>
      <Card title = "Empowering Innovations" desc = "Turnkey quantum systems for businesses and research institutions."/>
      </div>
      <img src="core.png" alt="" className="xl:w-1/2 h-1/2 xl:h-full object-cover absolute bottom-0 xl:right-0 pb-4 w-screen"/>
    </div>
  );
};

export default About;
