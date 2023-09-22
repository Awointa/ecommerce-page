import RemoveItemIcon from "../../../assets/icon-delete.svg";

const RemoveCartItem = (props) => {
  return (
    <div onClick={props.click}>
      <img src={RemoveItemIcon} alt="" />
    </div>
  );
};

export default RemoveCartItem;
