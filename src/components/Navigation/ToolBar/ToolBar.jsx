import React from "react";

import LoggedinUserProfile from "../../../assets/image-avatar.png";
import Logo from "../../Logo/Logo";
import ShoppingCartWidget from "../../UI/ShoppingCartWidget/ShoppingCartWidget";

import NavigationItems from "../NavigationItems/NavigationItems";

import CartDropdown from "../../CartDropdown/CartDropdown"

const ToolBar = (props) => {
  return (
    <header className="xs:flex xs:justify-between xs:items-center xs:px-7 xs:h-[4.5rem] lg:mx-28 lg:pt-12 lg:pb-14 lg:border-b-[1px] lg:border-b-grayishblue relative">
        <CartDropdown cartItems={props.cartItems} showCart={props.showCart} deletItem={props.deletItem}/>
      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <div
          onClick={props.toggleSideDrawer}
          className="cursor-pointer sm:hidden"
        >
          <svg
            className="menu fill-darkgrayishblue"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <Logo />
        <nav className="xs:hidden sm:block">
          <NavigationItems />
        </nav>
      </div>
      <div className="flex items-center gap-x-5">
        <ShoppingCartWidget toggleCart={props.toggleCart} cart={props.cart} />
        <div className="cursor-pointer">
          <img
            src={LoggedinUserProfile}
            alt="profile picture"
            className="w-7"
          />
        </div>
      </div>
    </header>
  );
};

export default ToolBar;
