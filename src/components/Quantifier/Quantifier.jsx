import Minus from "../../assets/icon-minus.svg";
import Plus from "../../assets/icon-plus.svg";

const Quantifier = (props) => {
  return (
    <div className="flex items-center w-full lg:w-[50%] justify-between bg-lightgrayishblue px-5 lg:px-4 py-4 rounded-lg lg:py-5 ">
      <span className="cursor-pointer" onClick={props.clickToReduceQuantity}>
        {" "}
        <img src={Minus} alt="minus sign" />
      </span>
      <span className="text-darkblue font-bold px-4">{props.quantity}</span>
      <span className="cursor-pointer" onClick={props.clickToAddQuantity}>
        <img src={Plus} alt="plus sign" />
      </span>
    </div>
  );
};

export default Quantifier;
