import CloseButtonIcon from "../../../assets/icon-close.svg";

const CloseButton = (props) => {
  return (
    <div onClick={props.clicked} className="inline-block">
      <img src={CloseButtonIcon} alt="" className="inline-block" />
    </div>
  );
};

export default CloseButton;
