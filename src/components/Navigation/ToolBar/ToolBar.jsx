import React from "react";

import LoggedinUserProfile from "../../../assets/image-avatar.png";
import Logo from "../../Logo/Logo";
import ShoppingCartWidget from "../../UI/ShoppingCartWidget/ShoppingCartWidget";
import { useContext } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import CartDropdown from "../../CartDropdown/CartDropdown";
import { ModalContext } from "../../../contexts/ModalContext";

const ToolBar = (props) => {
  const { toggleVisibilityHandler } = useContext(ModalContext);

  return (
    <header className="xs:flex xs:justify-between xs:items-center xs:px-7   lg:px-0 xs:h-[4.5rem] lg:mx-[15%] sm:mx-5 sm:pt-10 sm:pb-12  sm:border-b-[1px] sm:border-b-grayishblue relative">
      <CartDropdown
        cartItem={props.cartItem}
        showCart={props.showCart}
        deleteItem={props.deleteItem}
      />
      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <div
          onClick={toggleVisibilityHandler}
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
      <div className="flex items-center gap-x-5 lg:gap-8">
        <ShoppingCartWidget toggleCart={props.toggleCart} cartItem={props.cartItem}/>
        <div className="cursor-pointer">
          <img
            src={LoggedinUserProfile}
            alt="profile picture"
            className="w-7 lg:w-10"
          />
        </div>
      </div>
    </header>
  );
};

export default ToolBar;
