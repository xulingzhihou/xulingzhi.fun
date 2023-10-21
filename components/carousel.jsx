import Image from "next/image";
import { AiFillCloseCircle, AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Carousel = ({ images, activeImgIndex, setActiveImg, onCloseCarousel }) => {
  const activeImg = images[activeImgIndex];
  const { src, alt } = activeImg;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-5">
        <button className="self-end" onClick={onCloseCarousel}>
          <AiFillCloseCircle />
        </button>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={src}
            alt={alt}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "300px",
            }}
            width={500}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="flex justify-center space-x-3 mt-2">
            <button
              className="py-1 px-4"
              onClick={() =>
                activeImgIndex > 0 && setActiveImg(activeImgIndex - 1)
              }
            >
              <AiOutlineCaretLeft />
            </button>
            <button
              className="py-1 px-4"
              onClick={() =>
                activeImgIndex < images.length - 1 &&
                setActiveImg(activeImgIndex + 1)
              }
            >
              <AiOutlineCaretRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
