import { useEffect, useState } from "react";

// Components
import ToolBar from "../Navigation/ToolBar/ToolBar";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import ProductList from "../ProductList/ProductList";
import BackDrop from "../UI/BackDrop/BackDrop";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Lightbox from "../Lightbox/Lightbox";

// API end point
const API_URL = "http://127.0.0.1:5173/api/products";

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  // const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setProducts(data));
  }, []);

  // useEffect{()=>{
  //   setQuantity()
  // }}

  const toggleCartHandler = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const toggleSideDrawer = () => {
    setShowSideDrawer((prevValue) => !prevValue);
  };

  const addToCartHandler = (item) => {
    // item.quantity = quantity;
    setCartItems([...cartItems, item]);
    console.log(item);
  };

  const deleteItemHandler = () => {};

  const reduceQuantityHandler = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const addQuantityHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <>
      <BackDrop show={showSideDrawer} closeBackdrop={toggleSideDrawer} />
      <ToolBar
        toggleCart={toggleCartHandler}
        toggleSideDrawer={toggleSideDrawer}
        cartItems={cartItems}
        showCart={showCart}
        deleteItem={deleteItemHandler}
      />
      <SideDrawer
        showSideDrawer={showSideDrawer}
        closeSideDrawer={toggleSideDrawer}
      />
      <div className=" lg:flex justify-center lg:mx-44 lg:mt-20 lg:mb-40 lg:gap-6 lg:items-center">
        <ImageCarousel/>
        <Lightbox />
        <ProductList products={products} addToCart={addToCartHandler} />
      </div>
    </>
  );
};

export default Layout;
