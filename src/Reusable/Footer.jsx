import React from "react";
import "../css/Footer.css";
import Logo from "../assets/Logo/ArtfulPotteryProDark.png";

export const Footer = () => {
  return (
    <footer className="container mx-auto pt-[6rem] px-[1rem] md:px-[4rem] 2xl:px-[6rem]">
      <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-3 items-center">
        <div className="order-2 2xl:order-1 lg:order-1 md:order-2">
          <ul className="grid 2xl:justify-start md:justify-center justify-center 2xl:text-start md:text-center gap-3">
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center md:mt-4 mt-4">
              HOME
            </li>
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center">
              ABOUT
            </li>
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-start lg:text-start md:text-center text-center">
              COURSES
            </li>
          </ul>
        </div>
        <div className="grid items-center justify-center order-1 2xl:order-2 lg:order-2 md:order-1">
          <div className="flex justify-center">
            <img src={Logo} alt="" />
          </div>

          <p className="Dm-body brown-dark text-center">
            Our Mission Is To Bring The Calming Magic of Pottery Into People's
            Life In The Heart Of Lisbon
          </p>
        </div>
        <div className="order-3 2xl:order-3 lg:order-3 md:order-3">
          <ul className="grid gap-3 2xl:justify-end md:justify-center justify-center">
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text-center text-center 2xl:mt-0 md:mt-4 mt-4">
              BLOGS
            </li>
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text- text-center">
              EVENTS
            </li>
            <li className="Dm-body brown-dark text-[14px] font-medium 2xl:text-end lg:text-end md:text- text-center">
              CONTACT
            </li>
          </ul>
        </div>
      </div>
      <div
        className="border-t-2 w-full mt-[4rem] py-[2rem] flex justify-between"
        style={{ borderColor: "#543115" }}
      >
        <h6 className="Dm-body brown-dark">Disclaimer & Privacy Policy</h6>
        <h6 className="Dm-body brown-dark">@Copyright 2024</h6>
      </div>
    </footer>
  );
};
