import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};

const ImageCarouselModal = ({ closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const [clickedImg, setClickedImg] = useState(image1)


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

  const clickedImgHandler = (image, index) => {
    setClickedImg(image);
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-[500] mt-[-21%] xs:hidden sm:block">
      <div className="flex justify-end mb-5">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white hover:fill-orange"
          onClick={closeModal}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div>
        <div className="relative">
          <AnimatePresence>
            <div>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                alt=""
                className="rounded-lg max-w-[26rem]"
              />
            </div>
          </AnimatePresence>
        </div>

        <div className="flex top-[43%] min-w-full items-center  absolute">
          <div
            className="left lg:left-[-5%]  directionBtn"
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
          <div className="right-[-5%] directionBtn" onClick={handleNext}>
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
      <div className="flex gap-5 justify-center mt-7">
        {images.map((image, index) => (
          <div className="" key={index}>
            <img
              onClick={() => clickedImgHandler(image, index)}
              src={image}
              className="w-[4.5rem]  rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselModal;
