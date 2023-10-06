import { useState, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

const images = [
  {
    thumbText: "discription of product image 1",
    thumbImage: image1,
  },
  {
    thumbText: "discription of product image 2",
    thumbImage: image2,
  },
  {
    thumbText: "discription of product image 3",
    thumbImage: image3,
  },
  {
    thumbText: " discription of product image 4",
    thumbImage: image4,
  },
];

const Lightbox = (props) => {
  const [clickedImg, setClickedImg] = useState(image1);
  const [currentIndex, setCurrentIndex] = useState(null);

  const {toggleVisibilityHandler} = useContext(ModalContext)

  const handleClick = (image, index) => {
    setClickedImg(image.thumbImage);
    setCurrentIndex(index);
  };
  return (
    <div className="min-w-[50%] xs:hidden  sm:block container relative z-50">
      <div onClick={toggleVisibilityHandler}>
        <img
          src={clickedImg}
          alt="product discription image"
          className="rounded-lg img"
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-7 mt-6 justify-between">
        {images.map((image, index) => (
          <div className="" key={index}>
            <img
              src={image.thumbImage}
              alt={image.thumbText}
              className="rounded-lg cursor-pointer"
              onClick={() => handleClick(image, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
