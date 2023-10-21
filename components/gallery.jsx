import Carousel from "./carousel";
import Photo from "./photo";
import { useState } from "react";

const images = [
  {
    name: "xulingzhi-amsterdam-bikes",
    src: "/xulingzhi-amsterdam-bikes.jpg",
    alt: "bikes on a bridge in amesterdam",
  },
  {
    name: "xulingzhi-amsterdam-crossbridge",
    src: "/xulingzhi-amsterdam-crossbridge.jpg",
    alt: "a busy crossbridge in amesterdam",
  },
  {
    name: "xulingzhi-amsterdam-xxx-flag",
    src: "/xulingzhi-amsterdam-xxx-flag.jpg",
    alt: "a boathouse with a xxx flag in amesterdam",
  },
  //   {
  //     name: "xulingzhi-lisbon-nightstreetlamp",
  //     src: "/xulingzhi-lisbon-nightstreetlamp.jpg",
  //     alt: "a street lamp at night in lisbon",
  //   },
  {
    name: "xulingzhi-london-dalsonkinglandstation",
    src: "/xulingzhi-london-dalsonkinglandstation.jpg",
    alt: "dalson kingland train station in london",
  },
  {
    name: "xulingzhi-london-greenfield",
    src: "/xulingzhi-london-greenfield.jpg",
    alt: "a green field in london with a biker passing by",
  },
  {
    name: "xulingzhi-london-newingtongreenmarket",
    src: "/xulingzhi-london-newingtongreenmarket.jpg",
    alt: "newington green market in london",
  },
  {
    name: "xulingzhi-london-telephonebooth",
    src: "/xulingzhi-london-telephonebooth.jpg",
    alt: "a telephone booth on a sidewalk of london",
    isPortrait: true,
  },
  {
    name: "xulingzhi-london-rosegarden",
    src: "/xulingzhi-london-rosegarden.jpg",
    alt: "yellow roses in a rose garden in london",
  },
  {
    name: "xulingzhi-london-seagullmarket",
    src: "/xulingzhi-london-seagullmarket.jpg",
    alt: "seegulls searching for food in the after hour of an outdoor food market in london",
  },
  {
    name: "xulingzhi-london-shoreditch-wheatpastewall",
    src: "/xulingzhi-london-shoreditch-wheatpastewall.jpg",
    alt: "a wheat paste street art wall in shoreditch in london",
  },
  {
    name: "xulingzhi-london-soho",
    src: "/xulingzhi-london-soho.jpg",
    alt: "london soho street scene",
  },
  {
    name: "xulingzhi-london-taxi",
    src: "/xulingzhi-london-taxi.jpg",
    alt: "a taxi parked on the street of london",
  },
  {
    name: "xulingzhi-sintra-pond",
    src: "/xulingzhi-sintra-pond.jpg",
    alt: "a green pond in sintra garden in Portugal",
  },
];

const Gallery = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isCarouselShowing, setIsCarouselShowing] = useState(false);
  const selectImage = (index) => {
	console.log(index)
	setActiveImgIndex(index);
	setIsCarouselShowing(true);
};
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Photo
            key={image.name}
            src={image.src}
            alt={image.alt}
            selectImage={selectImage}
			imgIndex={index}
          />
        ))}
      </div>
      {isCarouselShowing && (
        <Carousel
          images={images}
          activeImgIndex={activeImgIndex}
          setActiveImg={selectImage}
		  onCloseCarousel={() => setIsCarouselShowing(false)}
        />
      )}
    </>
  );
};

export default Gallery;

/**
 * flex justify-center flex-wrap w-full
 */
