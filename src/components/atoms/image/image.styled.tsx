import styled from 'styled-components';

export const StyledImage = styled.img`
  height: ${({ height }) => `${height}px`};
  object-fit: cover;
  width: 100%;
`;
