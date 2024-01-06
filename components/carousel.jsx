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
    const onContextMenu = (event) => {
        event.preventDefault();
    };
    return (
        <div className="w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center ">
            <div className="flex flex-col bg-white p-10 w-3/4 h-3/4 items-center justify-center">
                <button className="place-self-end" onClick={onCloseCarousel}>
                    <BsXLg style={{ fontSize: '2em' }} />
                </button>
                <div
                    className="flex items-center justify-center h-full w-full"
                    onContextMenu={onContextMenu}
                >
                    <button
                        className="py-2 px-2"
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
							width: '100%',
          					height: '90%',
                        }}
                        width={1000}
                        height={100}
                        sizes="100vw"
                    />

                    <button
                        className="py-2 px-2"
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
