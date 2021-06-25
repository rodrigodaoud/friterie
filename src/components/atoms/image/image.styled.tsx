import styled from 'styled-components';
import { PictureProps, StyledImageProps } from './types';

export const Picture = styled.picture<PictureProps>`
  display: block;
  padding-bottom: ${({ imgWidth, imgHeight }) => (imgHeight / imgWidth) * 100}%;
  position: relative;
`;

export const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${({ centered }) => centered && `
    transform: translateY(-50%);
    top: 50%;
  `};
`;
