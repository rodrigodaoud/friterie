import React from 'react';
import { useInView } from 'react-intersection-observer';
import { StyledImage } from './image.styled';
import { Props } from './types';

export const Image: React.FC<Props> = ({
  src,
  alt,
  height,
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref}>
      {inView ? (
        <StyledImage
          className="img-fluid"
          alt={alt}
          src={src}
          height={height}
          loading="lazy"
        />
      ) : null}
    </div>
  );
};
