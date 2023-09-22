import Minus from "../../assets/icon-minus.svg";
import Plus from "../../assets/icon-plus.svg";

const Quantifier = (props) => {
  return (
    <div className="flex items-center w-full justify-between bg-lightgrayishblue px-6 py-4 rounded-lg lg:py-5 lg:w-[40%]">
      <span className="cursor-pointer" onClick={props.clickToReduceQuantity}>
        {" "}
        <img src={Minus} alt="minus sign" />
      </span>
      <span className="text-darkblue font-bold">{props.quantity}</span>
      <span className="cursor-pointer" onClick={props.clickToAddQuantity}>
        <img src={Plus} alt="plus sign" />
      </span>
    </div>
  );
};

export default Quantifier;
