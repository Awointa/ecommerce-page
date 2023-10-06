import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

const BackDrop = () => {
  const { visibility } = useContext(ModalContext);

  return visibility ? (
    <div className="w-[100vw] h-[100vh] fixed z-[100] bg-blackopacity"></div>
  ) : null;
};

export default BackDrop;
