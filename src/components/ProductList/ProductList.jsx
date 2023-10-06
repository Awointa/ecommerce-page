import Quantifier from "../Quantifier/Quantifier";
import PriceComponent from "../PriceComponent/PriceComponent";

const ProductDetails = (props) => {
  const products = props.products;
  return products.map((product) => (
    <section
      key={product.id}
      className="flex flex-col gap-1 lg:gap-2 justify-center  xs:mt-4 sm:mt-0 mb-24 sm:mb-0 xs:mx-5 sm:mx-0 min-w-fit container"
    >
      <h2 className="text-orange font-bold">SNEAKER COMPANY</h2>
      <h3 className="text-darkblue font-black text-3xl mt-4">
        {product.title}
      </h3>
      <p className="text-darkgrayishblue">{product.discription}</p>
      <PriceComponent
        price={product.price}
        percentDiscount={product.discount}
      />
      <div className="flex flex-col items-center gap-4 mt-6 lg:flex-row justify-self-center">
        <Quantifier
          clickToAddQuantity={props.addQuantity}
          clickToReduceQuantity={props.reduceQuantity}
          quantity={props.quantity}
        />
        <button
          onClick={() => {
            props.addToCart(product);
          }}
          className="text-white w-full bg-orange rounded-lg py-4 cursor-pointer flex justify-center content-center gap-2 "
        >
          <span>
            <svg
              className="fill-white"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill-rule="nonzero"
              />
            </svg>
          </span>
          <span className=" font-medium ">Add to cart</span>
        </button>
      </div>
    </section>
  ));
};

export default ProductDetails;
