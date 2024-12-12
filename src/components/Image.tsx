'use client';

import NextImage from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const Image = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    // Fallback image handling if needed
    setImageSrc('/path/to/fallback/image.png');
  };

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  );
};

export default Image;
