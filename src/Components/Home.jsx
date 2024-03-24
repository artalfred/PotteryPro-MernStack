import React from "react";
import Button from "../Reusable/Button";
import Content from "../Reusable/Content";

import Offer from "../assets/Home/Offer.png";
import LearnImage from "../assets/Home/learnImage.jpg";
import Events from "../assets/Home/Events.jpg";

function Home() {
  return (
    <section>
      <div className="Hero flex justify-center items-center w-full px-[1rem]">
        <div className="container mx-auto grid justify-center items-center">
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
        <div className="container mx-auto grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center">
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

      {/* SECTION 3 */}
      <div className="section--learn  py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[6rem]">
        <div className="container mx-auto grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center bg-white py-[2rem] md:py-[4rem] px-[2rem] md:px-[4rem] 2xl:px-[6rem]">
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

      {/* SECTION 4 */}
      <div className="section-visitblog py-[4rem] md:py-[8rem] 2xl:py-[12rem] px-[1rem]">
        <div className="grid justify-center items-center container mx-auto">
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center brown-dark">
            Discover The Calming <br></br> Magic Of Pottery
          </h1>

          <div className="flex justify-center mt-6">
            <p className="w-75  brown-dark sm:w-full md:w-3/4 lg:w-2/4  text-center Dm-body font-light">
              Welcome to Artful PotteryPro, where artistry meets functionality.
              Explore our collection of meticulously crafted ceramics, blending
              tradition with modernity. From elegant dinnerware to bespoke art
              pieces, discover the beauty of ceramics that redefine your space.
              Welcome to a world of endless possibilities in ceramics.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              btnName="VISIT BLOG"
              btnBackground="light"
              color={"dark"}
              btnHover={"btnLight"}
            />
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="section--events relative">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-24 items-center">
          <div className="pl-[1rem] md:pl-[4rem] 2xl:pl-[6rem] hidden md:hidden lg:block 2xl:block">
            <Content
              subTitle={"HOW TO GET STARTED"}
              Title={"Feel Good Pottery For beginners"}
              DescriptionOne={
                "Discover the joy of pottery with our 'Feel Good Pottery for Beginners' experience. Dive into the world of clay with confidence as our expert instructors guide you through the fundamentals."
              }
              DescriptionTwo={
                "Unleash your creativity in a relaxed and supportive environment, where every pinch and coil brings a sense of accomplishment."
              }
              DescriptionThree={
                "Whether you're shaping your first mug or crafting a decorative masterpiece, this class is designed to uplift your spirits and leave you feeling inspired. Join us for an unforgettable journey of self-expression and discovery in the wonderful world of pottery."
              }
              btnName={"JOIN EVENTS"}
              btnBackground={"brown"}
              btnColor={"white"}
              btnHover={"btnDark"}
            />
          </div>

          <div className="2xl:block lg:block md:hidden hidden">
            <img src={Events} alt="Join Events Our Now" />
          </div>

          <div className="block md:block lg:hidden 2xl:hidden px-[1rem] p-[2rem] md:p-[8rem]">
            <div className="w-full">
              <h6 className="text-white">HOW TO GET STARTED</h6>
              <h2 className="text-white text-3xl md:text-4xl 2xl:text-5xl mt-4">
                Feel Good Pottery For beginners
              </h2>
              <p className="mt-4 text-white Dm-body">
                Discover the joy of pottery with our 'Feel Good Pottery for
                Beginners' experience. Dive into the world of clay with
                confidence as our expert instructors guide you through the
                fundamentals.
              </p>

              <p className="mt-4 text-white Dm-body">
                Unleash your creativity in a relaxed and supportive environment,
                where every pinch and coil brings a sense of accomplishment.
              </p>

              <p className="mt-4 text-white Dm-body">
                Whether you're shaping your first mug or crafting a decorative
                masterpiece, this class is designed to uplift your spirits and
                leave you feeling inspired. Join us for an unforgettable journey
                of self-expression and discovery in the wonderful world of
                pottery.
              </p>

              <div className="mt-6">
                <Button
                  btnName={"JOIN EVENTS"}
                  btnBackground={"brown"}
                  color={"white"}
                  btnHover={"btnDark"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
