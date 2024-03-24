import React from "react";
import Logo from "../assets/Logo/ArtfulPotteryPro.png";
import NavMobile from "./NavMobile";

const Navigation = () => {
  return (
    <nav className="nav w-full sm:px-[1rem] md:px-[3rem] 2xl:px-[6rem] bg-transparent absolute">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full nav-desktop mx-auto ">
          <div>
            <ul className="flex gap-[4rem]">
              <li className="text-white text-[14px] font-medium">HOME</li>
              <li className="text-white text-[14px] font-medium">ABOUT</li>
              <li className="text-white text-[14px] font-medium">CONTACT</li>
            </ul>
          </div>

          <div>
            <img
              className="logo lg:w-full md:w-full sm:w-full"
              src={Logo}
              alt="Artful PotteryPro"
            />
          </div>

          <div>
            <ul className="flex gap-[4rem]">
              <li className="text-white text-[14px] font-medium">BLOG</li>
              <li className="text-white text-[14px] font-medium">EVENTS</li>
              <li className="text-white text-[14px] font-medium">COURSES</li>
            </ul>
          </div>
        </div>

        <div className="nav-mobile px-[2rem] mt-4">
          <div className="flex justify-between items-center">
            <div>
              <img className="logo-mobile" src={Logo} alt="Artful PotteryPro" />
            </div>

            <NavMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
