import DiscountPrice from "../DiscountPrice/DiscountPrice";

const PriceComponent = ({ price, percentDiscount }) => {
  return (
    <div className="flex justify-between mt-4 items-center lg:flex-col lg:items-start">
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold text-darkblue">
        <DiscountPrice price={price} percentDiscount={percentDiscount}/>
        </span>
       
        <span className="text-orange font-semibold px-1 bg-paleorange rounded text-center">
          {percentDiscount}%
        </span>
      </div>

      <div className="text-grayishblue font-bold line-through">
        ${price.toFixed(2)}
      </div>
    </div>
  );
};

export default PriceComponent;
