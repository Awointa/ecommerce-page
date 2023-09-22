import DeleteIcon from "../../assets/icon-delete.svg";
import AddedItem from "../../assets/image-product-1-thumbnail.jpg";
import DiscountPrice from "../DiscountPrice/DiscountPrice";
import TotalPrice from "../TotalPrice/TotalPrice";

const cartInfo = ({ showCart, cartItems, deletItem }) => {
  const isOpen = showCart ? "" : "none";
  return (
    <div
      className="absolute z-50 bg-white  min-w-[360px] top-[60%] mt-10 right-[2%] pt-5 p-7 rounded-lg drop-shadow-2xl lg:mt-4 "
      style={{ display: isOpen }}
    >
      <h2 className="text-lg font-bold pb-5 border-b-[0.5px] border-solid border-b-grayishblue">
        Cart
      </h2>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <div className="flex flex-col gap-5" key={item.id}>
              <div className="flex flex-col justify-between mt-5">
                <div className="flex justify-between items-center text-darkgrayishblue">
                  <img src={AddedItem} alt="" className="w-12 rounded" />
                  <div>
                    <span className="">{item.title}</span>
                    <div className="flex ">
                      <span className="flex items-center gap-2">
                        <DiscountPrice
                          price={item.price}
                          percentDiscount={item.discount}
                        />{" "}
                        * <span>{item.quantity}</span>
                        <span className="">
                          <TotalPrice price={item.price} percentDiscount={item.discount} quantity={item.quantity}/>
                        </span>
                      </span>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <div onClick={deletItem}>
                    <img src={DeleteIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="text-white w-full bg-orange rounded-lg py-4 cursor-pointer mt-6">
            Checkout
          </button>
        </div>
      ) : (
        <span className="flex justify-center p-16 text-grayishblue font-bold">
          Your cart is empty
        </span>
      )}
    </div>
  );
};

export default cartInfo;
