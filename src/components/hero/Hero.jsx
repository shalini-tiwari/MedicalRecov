import React from "react";
import InfoCard from "../common/InfoCard";

function Hero() {
  const infoCardData = [
    {
      icon: "assets/icons/heart.png",
      title: "Online Appoinment",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: "assets/icons/doctor.png",
      title: "Emergency Case",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: "assets/icons/report.png",
      title: "Cancer Care",
      description:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
  ];
  return (
    <div className="mx-auto container px-6 xl:px-40 py-2 xl:py-0">
      <div className="flex pt-20 justify-between">
        <div className="w-full xl:w-1/2">
          <h5 className="text-4xl font-bold text-primary">Join Us</h5>
          <h1 className="pt-10 text-7xl font-bold">
            A Great Place to Receive Care
          </h1>
          <h4 className="pt-10 text-2xl text-gray-400 font-light">
            Medical Recover is most focused in helping you discover your most
            beauiful smile
          </h4>
          <div className="pt-16 flex">
            <button class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-10 rounded mr-6">
              Get Quote Now
            </button>
            <button class="border-2 border-primary text-primary font-bold py-3 px-10 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden xl:block xl:w-1/2">
          <div class="float-right relative">
            <img
              className="float-right"
              src="/assets/bg/hero-bg.png"
              alt="hero"
            />
            <div class="absolute -right-4 w-[100rem]">
              <img
                className="float-right"
                src="/assets/bg/hero.png"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-16">
        <div className="flex flex-wrap justify-between">
          {infoCardData.map((data) => (
            <InfoCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
