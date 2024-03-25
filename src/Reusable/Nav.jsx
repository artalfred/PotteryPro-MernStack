import React from "react";
import Logo from "../assets/Logo/ArtfulPotteryPro.png";
import NavMobile from "./NavMobile";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav w-full sm:px-[1rem] md:px-[3rem] 2xl:px-[6rem] bg-transparent absolute">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full nav-desktop mx-auto ">
          <div>
            <ul className="flex gap-[4rem]">
              <li>
                <a
                  href="/"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href="/">
              <img
                className="logo lg:w-full md:w-full sm:w-full"
                src={Logo}
                alt="Artful PotteryPro"
              />
            </a>
          </div>

          <div>
            <ul className="flex gap-[4rem]">
              <li>
                <a
                  href="/blog"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="events"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  EVENTS
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  COURSES
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-mobile px-[2rem] mt-4">
          <div className="flex justify-between items-center">
            <div>
              <a href="/">
                <img
                  className="logo-mobile"
                  src={Logo}
                  alt="Artful PotteryPro"
                />
              </a>
            </div>

            <NavMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
