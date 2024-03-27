import React from "react";
import Button from "./Button";

function HeroSection({
  Title,
  SubTitle,
  Description,
  btnName,
  btnBackground,
  btnColor,
  btnHover,
  TextColor,
  SectionName,
}) {
  return (
    <div className="hero--section py-[4rem] md:py-[8rem] 2xl:py-[12rem] px-[1rem]">
      <div className="grid justify-center items-center container mx-auto">
        <h6 className={`${TextColor} text-center`}>{SubTitle}</h6>
        <div className="flex justify-center">
          <h1
            className={`${TextColor} ${
              !SectionName
                ? "2xl:text-7xl lg:text-7xl md:text-6xl sm:text-4xl text-4xl"
                : "2xl:text-6xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl"
            }  w-full 2xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-full text-center`}
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
