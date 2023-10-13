import React from 'react';
import Image from 'next/image'

const Photo = ({ src, alt }) => {
  return (
    <div className="p-1 transition-all duration-500 transform hover:scale-105">
      <Image src={src} alt={alt} width={500} height={500} />
    </div>
  );
};

export default Photo;