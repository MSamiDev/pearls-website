import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileLink = ({ MobileLink }) => {
  return (
    <nav className="lg:hidden bg-hero w-full h-[30rem]">
      <AiOutlineClose
        onClick={() => MobileLink(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />
      <ul className="flex flex-col justify-center space-y-8 h-[30rem] items-center capitalize font-secondary">
      <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue text-3xl">
          Home
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue text-3xl">
          <a href="#services">Services</a>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue text-3xl">
          <a href="#aboutus">

          About Us
          </a>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue text-3xl">
          <a href="#contact">
          Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileLink;
