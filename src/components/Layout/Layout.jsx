import { useEffect, useState, useContext } from "react";

// Components
import ToolBar from "../Navigation/ToolBar/ToolBar";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import ProductList from "../ProductList/ProductList";
import BackDrop from "../UI/BackDrop/BackDrop";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Lightbox from "../Lightbox/Lightbox";
import ImageCarouselModal from "../ImageCarouselModal/ImageCarouselModal";
import { ModalContext } from "../../contexts/ModalContext";

// API end point
const API_URL = "http://127.0.0.1:5173/api/products";

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {});

  const { visibility, toggleVisibilityHandler } = useContext(ModalContext);

  const toggleCartHandler = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const addToCartHandler = (item) => {
    item.quantity = quantity;
    if (item.quantity > 0) setCartItem([item]);
  };

  const deleteItemHandler = (index) => {
    // const updatedCartItems = [...cartItems];
    // updatedCartItems.splice(index, 1);
    // setCartItems([...updatedCartItems]);
    setCartItem(cartItem.filter((items) => items.id !== index));
    setQuantity(0);
  };

  const reduceQuantityHandler = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const addQuantityHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="mb-14">
      <BackDrop />
      <ToolBar
        toggleCart={toggleCartHandler}
        cartItem={cartItem}
        showCart={showCart}
        deleteItem={deleteItemHandler}
      />
      <SideDrawer />
      <div className="sm:w-[auto] sm:gap-20 lg:gap-24 sm:grid sm:grid-cols-2  sm:grid-rows-1 sm:justify-items-center sm:mt-16 sm:mx-[5%] lg:mx-[19%] basis-full">
        <ImageCarousel />
        <Lightbox />
        <ProductList
          products={products}
          addToCart={addToCartHandler}
          addQuantity={addQuantityHandler}
          reduceQuantity={reduceQuantityHandler}
          quantity={quantity}
        />
        <div className="absolute top-[38]">
          {visibility ? (
            <ImageCarouselModal closeModal={toggleVisibilityHandler} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Layout;
