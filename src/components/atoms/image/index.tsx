import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Picture, StyledImage } from './image.styled';
import { Props } from './types';

export const Image: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  centered = true,
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <Picture ref={ref} imgWidth={width} imgHeight={height}>
      {inView ? (
        <StyledImage
          centered={centered}
          alt={alt}
          src={src}
          loading="lazy"
        />
      ) : null}
    </Picture>
  );
};
