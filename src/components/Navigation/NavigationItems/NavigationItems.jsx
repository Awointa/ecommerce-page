import React from "react";

const NavigationItems = () => {
  return (
    <ul className="flex flex-col gap-4 font-extrabold cursor-pointer text-lg sm:flex-row sm:text-grayishblue lg:font-normal">
      <li>
        <a href="/">Collections</a>
      </li>
      <li>
        <a href="/">Men</a>
      </li>
      <li>
        <a href="/">Women</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};

export default NavigationItems;
