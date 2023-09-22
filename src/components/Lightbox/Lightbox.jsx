import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

import thumbnailImage1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnailImage2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnailImage3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnailImage4 from "../../assets/image-product-4-thumbnail.jpg";

const images = [
  { text: "discription of product is here image1", image: image1 },
  { text: "discription of product is here image2", image: image2 },
  { text: "discription of product is here image3", image: image3 },
  { text: "discription of product is here image4", image: image4 },
];

const thumbnailImages = [
  {
    thumbText: "minimized image discription for product image 1",
    thumbImage: thumbnailImage1,
  },
  {
    thumbText: "minimized image discription for product image 2",
    thumbImage: thumbnailImage2,
  },
  {
    thumbText: "minimized image discription for product image 3",
    thumbImage: thumbnailImage3,
  },
  {
    thumbText: "minimized image discription for product image 4",
    thumbImage: thumbnailImage4,
  },
];

const Lightbox = () => {
  return (
    <div className="container xs:hidden sm:hidden md:hidden lg:block">
      <div>
        <img
          src={image1}
          alt="product discription image"
          className="rounded-lg"
        />
      </div>
      <div className="flex mt-7 gap-5">
        {thumbnailImages.map((image) => (
          <div className="">
            <img src={image.thumbImage} alt={image.thumbText} className="w-18  rounded-lg"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
