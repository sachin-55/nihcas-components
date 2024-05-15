import React, { useEffect, useState } from 'react';

import ImageStyled from './style';

interface Props extends React.ComponentProps<'img'> {
  src: string;
  fallbackSrc?: string;
  errorSrc?: string;
  alt?: string;
}

const ErrorImage = 'https://via.placeholder.com/500?text=Image+Not+Supported';

const NoImage = 'https://via.placeholder.com/500?text=Image+Not+Found';

const Image = ({
  src,
  alt = '',
  errorSrc = ErrorImage,
  fallbackSrc = NoImage,
  className,
  ...restProps
}: Props) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoadingError, setImageLoadingError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleImageError = () => {
    setImageSrc(errorSrc);
    setImageLoadingError(true);
  };

  if (!imageSrc) {
    return (
      <ImageStyled
        src={fallbackSrc}
        onError={handleImageError}
        alt={alt}
        className={`${className} noImage`}
        loading="lazy"
        {...restProps}
      />
    );
  }
  return (
    <ImageStyled
      src={imageSrc}
      alt={alt}
      onError={handleImageError}
      className={`${className} ${imageLoadingError ? 'noImage' : ''}`}
      loading="lazy"
      {...restProps}
    />
  );
};

export default Image;
