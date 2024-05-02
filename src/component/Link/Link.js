import React from "react";
import Button from "../Button";

const LinkBar = () => {
  return (
    <nav className="lg:flex lg:gap-8 hidden">
      <ul className="flex flex-row gap-8 pt-3">
        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          Home
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer  hover:text-royal_blue">
          <a href="#services">Services</a>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <a href="#aboutus">

          About Us
          </a>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <a href="#contact">
          Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LinkBar;
