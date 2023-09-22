import React from "react";

import CloseButton from "../../UI/CloseButton/CloseButton";

import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  return props.showSideDrawer ? (
    <div className="fixed w-[255px] max-w-[70%] h-full left-0 top-0 z-[200] bg-white py-7 px-6 sm:hidden">
      <div>
        <CloseButton clicked={props.closeSideDrawer} />
      </div>
      <nav className="pt-10">
        <NavigationItems />
      </nav>
    </div>
  ) : null;
};

export default SideDrawer;
