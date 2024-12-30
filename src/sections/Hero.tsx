import { Spotlight } from "../components/ui/spotlight";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

    useGSAP(()=>{
        gsap.fromTo("#text",{
            opacity:0,
            y:100,    
        },{
            opacity:1,
            y:0,
            duration:1,
        })

        gsap.fromTo("#image",{
            opacity:0,
        },{
            opacity:1,
            delay:0.5,
            duration:1,
        })
    })

  return (
    <div className="w-full h-screen relative bg-black z-50" id="home">
      <Spotlight className="-top-10 left-0 md:left-0 md:-top-60" fill="white" />
      <div className="md:px-28 px-6 flex flex-col gap-0 absolute h-full w-full justify-around md:justify-center md:items-center">
        <div id="text" className="relative top-8 flex flex-col md:gap-0 md:h-2/3 z-10 justify-center">
          <h4 className="text-[#cfdcff] text-[14px] tracking-widest font-semibold">
            Future is Here
          </h4>
          <h1 className="text-[#f0bc2e] text-[37px] sm:text-[60px] tracking-wider font-bold">
            Shaping a Quantum-Powered Tomorrow
          </h1>
          <h3 className="text-[#cfdcff] font-light text-[23px] md:w-4/5 md:font-normal">
            QuantumCore is a cutting-edge startup revolutionizing the future of
            computing by designing and manufacturing quantum computers.
          </h3>
        </div>
        <div className="h-1/3 md:relative md:w-full md:h-1/2 z-20 flex items-center md:bottom-10 justify-center">
          <img id="image" src="quantummecha.jpg" alt="" className="md:h-[400px] md:w-[900px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
