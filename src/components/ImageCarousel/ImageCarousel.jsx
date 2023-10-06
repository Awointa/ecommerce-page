import { useState } from "react";
import { motion} from "framer-motion";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

const images = [image1, image2, image3, image4];

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ImageCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative block sm:hidden">
      <div>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          alt=""
          className="img"
        />
      </div>

      <div className="flex  min-w-[100%] p-[15px] justify-between absolute top-[45%] sm:p-[25px]">
        <div
          className="left  w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={handlePrevious}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div
          className="right w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={handleNext}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
