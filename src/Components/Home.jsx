import React from "react";
import Button from "../Reusable/Button";
import Content from "../Reusable/Content";

import Offer from "../assets/Home/Offer.png";
import LearnImage from "../assets/Home/learnImage.jpg";

function Home() {
  return (
    <section>
      <div className="Hero flex justify-center items-center w-full px-[1rem]">
        <div className="grid justify-center items-center">
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center text-white">
            Discover The Calming <br></br> Magic Of Pottery
          </h1>

          <div className="flex justify-center mt-6">
            <p className="w-75 text-white sm:w-full md:w-3/4 lg:w-2/4  text-center Dm-body font-light">
              Welcome to Artful PotteryPro, where artistry meets functionality.
              Explore our collection of meticulously crafted ceramics, blending
              tradition with modernity. From elegant dinnerware to bespoke art
              pieces, discover the beauty of ceramics that redefine your space.
              Welcome to a world of endless possibilities in ceramics.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              btnName="EXPLORE"
              btnBackground="light"
              color={"dark"}
              btnHover={"btnLight"}
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section--offer py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[12rem]">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center">
          <Content
            subTitle={"WHAT WE OFFER"}
            Title={"Ceramic Session To Melt Away The Excess Stress"}
            DescriptionOne={
              "Indulge in a rejuvenating ceramic session designed to melt away the excess stress and transport you to a realm of tranquility and creativity. Immerse yourself in the therapeutic art of pottery, where every stroke of clay becomes a cathartic release, and every creation is a testament to your inner peace."
            }
            DescriptionTwo={
              "Join us on a journey of self-discovery and relaxation as you mold, shape, and sculpt your worries away. Whether you're a seasoned ceramic artist or a curious beginner, our expert instructors will guide you through the process with warmth and encouragement, fostering an environment where inspiration flourishes and stress fades into the background."
            }
            DescriptionThree={
              " Experience the soothing sensation of clay beneath your fingertips, the gentle rhythm of the wheel spinning beneath your hands, and the joy of seeing your visions come to life in tangible form. Step into our studio and leave the hustle and bustle of everyday life behind as you embark on a transformative ceramic session that promises to uplift your spirit and rejuvenate your soul."
            }
            btnName={"LEARN ABOUT US"}
            btnBackground={"brown"}
            btnColor={"white"}
            btnHover={"btnDark"}
          />

          <div className="mt-6">
            <img src={Offer} alt="What we offer?" />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section--learn py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[6rem]">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center bg-white py-[2rem] md:py-[4rem] px-[2rem] md:px-[4rem] 2xl:px-[6rem]">
          <div>
            <img src={LearnImage} alt="Learn with us" />
          </div>

          <Content
            subTitle={"LEARN WITH US"}
            Title={"Take A Pottery Course & Find Inner Peace"}
            DescriptionOne={
              "Indulge in a rejuvenating ceramic session designed to melt away the excess stress and transport you to a realm of tranquility and creativity. Immerse yourself in the therapeutic art of pottery, where every stroke of clay becomes a cathartic release, and every creation is a testament to your inner peace."
            }
            DescriptionTwo={
              "Join us on a journey of self-discovery and relaxation as you mold, shape, and sculpt your worries away. Whether you're a seasoned ceramic artist or a curious beginner, our expert instructors will guide you through the process with warmth and encouragement, fostering an environment where inspiration flourishes and stress fades into the background."
            }
            btnName={"EXPLORE COURSES"}
            btnBackground={"brown"}
            btnColor={"white"}
            btnHover={"btnDark"}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
