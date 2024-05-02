import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-gradient-to-tr bg-royal_blue  cursor-pointer py-4 px-6 rounded-full text-black text-[18px] font-bold text-opacity-[0.8]">
        {text}
      </button>
    </div>
  );
};

export default Button;
