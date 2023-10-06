import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibilityHandler = () => {
    setVisibility((prevVal) => !prevVal);
  };

  return (
    <ModalContext.Provider value={{ visibility, toggleVisibilityHandler }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
