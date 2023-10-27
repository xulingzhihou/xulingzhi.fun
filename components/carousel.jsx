import Image from 'next/image';

import { BsChevronLeft, BsChevronRight, BsXLg } from 'react-icons/bs';

const Carousel = ({
    images,
    activeImgIndex,
    setActiveImg,
    onCloseCarousel,
}) => {
    const activeImg = images[activeImgIndex];
    const { src, alt } = activeImg;
    return (
        <div className="w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center ">
            <div className="flex flex-col bg-white p-5 w-10/12 h-10/12">
                <button className="place-self-end" onClick={onCloseCarousel}>
                    <BsXLg style={{ fontSize: '2em' }} />
                </button>
                <div className="flex items-center justify-around">
                    <button
                        className="py-1 px-1"
                        onClick={() =>
                            setActiveImg(
                                activeImgIndex > 0
                                    ? activeImgIndex - 1
                                    : images.length - 1
                            )
                        }
                    >
                        <BsChevronLeft style={{ fontSize: '2em' }} />
                    </button>
                    <Image
                        src={src}
                        alt={alt}
                        style={{
                            objectFit: 'contain',
                            height: '800px',
                        }}
                        width={1000}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <button
                        className="py-1 px-1"
                        onClick={() =>
                            setActiveImg(
                                activeImgIndex < images.length - 1
                                    ? activeImgIndex + 1
                                    : 0
                            )
                        }
                    >
                        <BsChevronRight style={{ fontSize: '2em' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
