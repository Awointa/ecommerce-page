const BackDrop = (props) => {
  return props.show ? (
    <div onClick={props.closeBackdrop} className="w-[100vw] h-[100vh] fixed z-[100] bg-blackopacity"></div>
  ) : null;
};

export default BackDrop;
