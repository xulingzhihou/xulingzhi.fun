import React from 'react';
import Image from 'next/image';

/**
 * Photo component to render an image
 * @param {*} param0
 * @returns
 */

const Photo = ({ src, alt, selectImage, imgIndex }) => {
    const onPhotoClick = () => {
        selectImage(imgIndex);
    };
    return (
        <div
            className={`p-3 transition ease-in-out duration-500 transform hover:shadow hover:scale-110 cursor-pointer `}
        >
            <a onClick={onPhotoClick}>
                <Image
                    src={src}
                    alt={alt}
                    // sizes="100vw"
                    style={{
                        width: '100%',
                        objectFit: 'contain',
                        height: '300px',
                    }}
                    width={600}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </a>
        </div>
    );
};

export default Photo;

/**
 * w-full sm:w-1/2 md:w-1/2 lg:w-1/3
 * 
 * style={{
		  objectFit: "contain"
        }}
 */
