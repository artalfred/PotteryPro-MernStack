import React from "react";
import Button from "./Button";

function Content({
  subTitle,
  Title,
  DescriptionOne,
  DescriptionTwo,
  DescriptionThree,
  btnName,
  btnBackground,
  btnColor,
  btnHover,
}) {
  return (
    <div className="w-full">
      <h6 className="brown-sub-color">{subTitle}</h6>
      <h2 className="brown-dark text-3xl md:text-4xl 2xl:text-5xl mt-4">
        {Title}
      </h2>
      <p className="mt-4 brown-dark Dm-body">{DescriptionOne}</p>

      <p className="mt-4 brown-dark Dm-body">{DescriptionTwo}</p>

      <p className={`mt-${!btnName ? 0 : 4} brown-dark Dm-body`}>
        {DescriptionThree}
      </p>

      <div className={`mt-${!btnName ? 0 : 6}`}>
        <Button
          btnName={btnName}
          btnBackground={btnBackground}
          color={btnColor}
          btnHover={btnHover}
        />
      </div>
    </div>
  );
}

export default Content;
