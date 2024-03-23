import React from "react";
import Offer from "../assets/Home/Offer.png";
import Button from "../Reusable/Button";

function Home() {
  return (
    <section>
      <div className="Hero flex justify-center items-center w-full px-[2rem]">
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
      <div className="section--offer py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[2rem]  md:px-[4rem] lg:px-[12rem]">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center">
          <div className="w-full">
            <h6 className="brown-sub-color">WHAT WE OFFER</h6>
            <h2 className="brown-dark text-5xl mt-4">
              Ceramic Session To Melt Away The Excess Stress
            </h2>
            <p className="mt-4 brown-dark Dm-body">
              Indulge in a rejuvenating ceramic session designed to melt away
              the excess stress and transport you to a realm of tranquility and
              creativity. Immerse yourself in the therapeutic art of pottery,
              where every stroke of clay becomes a cathartic release, and every
              creation is a testament to your inner peace.
            </p>

            <p className="mt-4 brown-dark Dm-body">
              Join us on a journey of self-discovery and relaxation as you mold,
              shape, and sculpt your worries away. Whether you're a seasoned
              ceramic artist or a curious beginner, our expert instructors will
              guide you through the process with warmth and encouragement,
              fostering an environment where inspiration flourishes and stress
              fades into the background.
            </p>

            <p className="mt-4 brown-dark Dm-body">
              Experience the soothing sensation of clay beneath your fingertips,
              the gentle rhythm of the wheel spinning beneath your hands, and
              the joy of seeing your visions come to life in tangible form. Step
              into our studio and leave the hustle and bustle of everyday life
              behind as you embark on a transformative ceramic session that
              promises to uplift your spirit and rejuvenate your soul.
            </p>

            <div className="mt-6">
              <Button
                btnName={"LEARN ABOUT US"}
                btnBackground={"brown"}
                color={"white"}
                btnHover={"btnDark"}
              />
            </div>
          </div>

          <div className="mt-6">
            <img src={Offer} alt="What we offer?" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
