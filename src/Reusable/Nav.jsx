import React from "react";
import Logo from "../assets/Logo/ArtfulPotteryPro.png";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav w-full sm:px-[1rem] md:px-[3rem] 2xl:px-[6rem] bg-transparent absolute">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full nav-desktop mx-auto ">
          <div>
            <ul className="flex gap-[4rem]">
              <li>
                <Link
                  to="/"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img
                className="logo lg:w-full md:w-full sm:w-full"
                src={Logo}
                alt="Artful PotteryPro"
              />
            </Link>
          </div>

          <div>
            <ul className="flex gap-[4rem]">
              <li>
                <Link
                  to="/blog"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="events"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="Dm-body text-white text-[12px] font-medium"
                >
                  COURSES
                </Link>
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
