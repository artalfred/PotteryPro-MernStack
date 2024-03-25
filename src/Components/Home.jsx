import React from "react";
import Button from "../Reusable/Button";
import Content from "../Reusable/Content";

import Offer from "../assets/Home/Offer.png";
import LearnImage from "../assets/Home/learnImage.jpg";
import Events from "../assets/Home/Events.jpg";
import Sactuary from "../assets/Home/Sactuary.jpg";
import HeroSection from "../Reusable/HeroSection";

function Home() {
  return (
    <section>
      <div className="Hero flex justify-center items-center px-[1rem] w-full">
        <HeroSection
          Title={"Discover The Calming Magic of Pottery"}
          Description={
            "Welcome to Artful PotteryPro, where artistry meets functionality. Explore our collection of meticulously crafted ceramics, blending tradition with modernity. From elegant dinnerware to bespoke art pieces, discover the beauty of ceramics that redefine your space. Welcome to a world of endless possibilities in ceramics."
          }
          btnName={"VISIT BLOG"}
          btnBackground={"light"}
          btnColor={"dark"}
          btnHover={"btnLight"}
          TextColor={"text-white"}
        />
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
      <div className="bg-semidark">
        <HeroSection
          Title={
            "I Love Writing About How Artful Changed My Life For The Better"
          }
          Description={
            "Welcome to Artful PotteryPro, where artistry meets functionality. Explore our collection of meticulously crafted ceramics, blending tradition with modernity. From elegant dinnerware to bespoke art pieces, discover the beauty of ceramics that redefine your space. Welcome to a world of endless possibilities in ceramics."
          }
          btnName={"VISIT BLOG"}
          btnBackground={"light"}
          btnColor={"dark"}
          btnHover={"btnLight"}
          TextColor={"brown-dark"}
        />
      </div>

      {/* SECTION 5 */}
      <div className="section--events">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  items-center">
          <div className="px-[1rem] md:px-[4rem] 2xl:px-[6rem] hidden md:hidden lg:block 2xl:block">
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

      {/* SECTION 6 */}
      <div className="section--sactuary">
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  items-center">
          <div className="2xl:block lg:block md:hidden hidden">
            <img src={Sactuary} alt="Join Events Our Now" />
          </div>

          <div className="justify-center px-[1rem] md:px-[4rem] 2xl:px-[6rem] hidden md:hidden lg:block 2xl:block">
            <Content
              Title={
                "Our Little Sactuary In The heart Of Art & Our Commitment To Help The Community"
              }
              DescriptionOne={
                "Discover our sanctuary nestled in the heart of art, where creativity thrives and community flourishes. With a steadfast commitment to uplifting our community, we strive to make a positive impact through art, collaboration, and support. "
              }
              DescriptionTwo={
                "Join us in fostering connections, celebrating diversity, and spreading joy through our shared passion for creativity."
              }
            />

            <div className="grid gap-3 grid-cols-2">
              <div className="flex items-center gap-3 brown-dark">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <p className="Dm-body">ECO-FRIENDLY</p>
              </div>
              <div className="flex items-center gap-3 brown-dark">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <p className="Dm-body">SUPPORTS LOCALS</p>
              </div>
              <div className="flex items-center gap-3 brown-dark">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <p className="Dm-body">DONATES REGULARLY</p>
              </div>
              <div className="flex items-center gap-3 brown-dark">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <p className="Dm-body">CHARITY ART-FAIR</p>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="block md:block lg:hidden 2xl:hidden px-[1rem] p-[2rem] md:p-[8rem]">
            <div className="w-full">
              <h2 className="text-white text-3xl md:text-4xl 2xl:text-5xl mt-4">
                Our Little Sactuary In The heart Of Art & Our Commitment To Help
                The Community
              </h2>
              <p className="mt-4 text-white Dm-body">
                Discover the joy of pottery with our 'Feel Good Pottery for
                Beginners' experience. Dive into the world of clay with
                confidence as our expert instructors guide you through the
                fundamentals.
              </p>

              <div className="grid gap-3 grid-cols-1 mt-4">
                <div className="flex items-center gap-3 text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <p className="Dm-body">ECO-FRIENDLY</p>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <p className="Dm-body">SUPPORTS LOCALS</p>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <p className="Dm-body">DONATES REGULARLY</p>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <p className="Dm-body">CHARITY ART-FAIR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
