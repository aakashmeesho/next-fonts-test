import React, { useCallback } from 'react';

interface ImageProps {
  imgUrl: string;
  fallbackImgUrl?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  loading?: 'eager' | 'lazy';
}

export const PerfImage: React.FC<ImageProps> = ({
  imgUrl,
  fallbackImgUrl,
  alt,
  className = '',
  width,
  height,
  ...props
}) => {
  const getImgUrl = useCallback(
    (imgUrl) => {
      const ext = imgUrl?.substr(imgUrl?.lastIndexOf('.') + 1);
      // if image is other than webp
      if (ext && ext !== 'webp' && imgUrl?.includes(`.${ext}`)) {
        return imgUrl?.replace(`.${ext}`, '.webp');
      } else {
        return imgUrl;
      }
    },
    [imgUrl],
  );

  return (
    <picture>
      <source
        srcSet={getImgUrl(imgUrl)}
        type="image/webp"
        className={`lazyload`}
        {...props}
      />
      <img
        src={fallbackImgUrl || imgUrl}
        width={width || '100%'}
        height={height || '100%'}
        className={`lazyload ${className}`}
        alt={alt}
        {...props}
      />
    </picture>
  );
};
