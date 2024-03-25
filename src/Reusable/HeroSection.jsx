import React from "react";
import Button from "./Button";

function HeroSection({
  Title,
  Description,
  btnName,
  btnBackground,
  btnColor,
  btnHover,
  TextColor,
}) {
  return (
    <div className="hero--section py-[4rem] md:py-[8rem] 2xl:py-[12rem] px-[1rem]">
      <div className="grid justify-center items-center container mx-auto">
        <div className="flex justify-center">
          <h1
            className={`${TextColor} w-full 2xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-full  lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center`}
          >
            {Title}
          </h1>
        </div>

        <div className="flex justify-center mt-6">
          <p
            className={`w-75 ${TextColor} sm:w-full md:w-3/4 lg:w-2/4  text-center Dm-body font-light`}
          >
            {Description}
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            btnName={btnName}
            btnBackground={btnBackground}
            color={btnColor}
            btnHover={btnHover}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
