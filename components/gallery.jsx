// Gallery.jsx
import Carousel from './carousel';
import { useState } from 'react';
import Image from 'next/image';

const images = [
    {
        name: 'xulingzhi-amsterdam-bikes',
        src: '/xulingzhi-amsterdam-bikes.jpg',
        alt: 'bikes on a bridge in amesterdam',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-amsterdam-crossbridge',
        src: '/xulingzhi-amsterdam-crossbridge.jpg',
        alt: 'a busy crossbridge in amesterdam',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-amsterdam-xxx-flag',
        src: '/xulingzhi-amsterdam-xxx-flag.jpg',
        alt: 'a boathouse with a xxx flag in amesterdam',
        isPortrait: false,
    },
    {
        name: "xulingzhi-lisbon-nightstreetlamp",
        src: "/xulingzhi-lisbon-nightstreetlamp.jpg",
        alt: "a street lamp at night in lisbon",
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-dalsonkinglandstation',
        src: '/xulingzhi-london-dalsonkinglandstation.jpg',
        alt: 'dalson kingland train station in london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-greenfield',
        src: '/xulingzhi-london-greenfield.jpg',
        alt: 'a green field in london with a biker passing by',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-newingtongreenmarket',
        src: '/xulingzhi-london-newingtongreenmarket.jpg',
        alt: 'newington green market in london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-telephonebooth',
        src: '/xulingzhi-london-telephonebooth.jpg',
        alt: 'a telephone booth on a sidewalk of london',
        isPortrait: true,
    },
    {
        name: 'xulingzhi-london-rosegarden',
        src: '/xulingzhi-london-rosegarden.jpg',
        alt: 'yellow roses in a rose garden in london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-seagullmarket',
        src: '/xulingzhi-london-seagullmarket.jpg',
        alt: 'seagulls searching for food in the after hour of an outdoor food market in london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-shoreditch-wheatpastewall',
        src: '/xulingzhi-london-shoreditch-wheatpastewall.jpg',
        alt: 'a wheat paste street art wall in shoreditch in london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-soho',
        src: '/xulingzhi-london-soho.jpg',
        alt: 'london soho street scene',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-london-taxi',
        src: '/xulingzhi-london-taxi.jpg',
        alt: 'a taxi parked on the street of london',
        isPortrait: false,
    },
    {
        name: 'xulingzhi-sintra-pond',
        src: '/xulingzhi-sintra-pond.jpg',
        alt: 'a green pond in sintra garden in Portugal',
        isPortrait: false,
    },
];

const Gallery = () => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [isCarouselShowing, setIsCarouselShowing] = useState(false);

    const selectImage = (index) => {
        setActiveImgIndex(index);
        setIsCarouselShowing(true);
        document.body.classList.add('overflow-hidden');
    };

    const onCloseCarousel = () => {
        setIsCarouselShowing(false);
        document.body.classList.remove('overflow-hidden');
    };

    const onContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div
              //  ref={galleryRef}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ${
                    isCarouselShowing ? 'overflow-hidden' : 'overflow-auto'
                }`}
            >
                {images.map((image, index) => (
                    <div
                        key={image.name}
                        className={`relative overflow-hidden cursor-pointer transition duration-500 transform hover:shadow-lg hover:scale-105 ${
                            image.isPortrait ? 'row-span-2' : 'row-span-1'
                        }`}
                        style={{
                            height: image.isPortrait ? '600px' : '300px'
                        }}
                        onClick={() => selectImage(index)}
                        onContextMenu={onContextMenu}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            style={{
                                objectFit: 'cover',
                            }}
                            className="transition-all duration-300 hover:opacity-90"
                        />
                    </div>
                ))}
            </div>

            <div
                className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out transform ${
                    isCarouselShowing ? 'scale-100' : 'scale-0'
                }`}
            >
                <Carousel
                    images={images}
                    activeImgIndex={activeImgIndex}
                    setActiveImg={selectImage}
                    onCloseCarousel={onCloseCarousel}
                />
            </div>
        </>
    );
};

export default Gallery;