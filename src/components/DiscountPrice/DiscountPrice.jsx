const DiscountPrice = ({ price, percentDiscount }) => {
  const discountPrice =
    percentDiscount > 0 ? (percentDiscount / 100) * price : price;
  return (
    <span className="">
      ${discountPrice.toFixed(2)}
    </span>
  );
};

export default DiscountPrice;
