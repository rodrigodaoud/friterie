import React from 'react';
import styled from 'styled-components';
import { Props, StyledProps } from './types';

export const StyledHeading = styled.div<StyledProps>`
  color: ${({ theme, level }) => theme.heading[level].color};
  font-family: ${({ theme, level }) => theme.heading[level].fontFamily};
  font-size: ${({ theme, level }) => theme.heading[level].fontSize};
  font-weight: ${({ theme, level }) => theme.heading[level].fontWeight};
`;

export const Heading: React.FC<Props> = ({
  level,
  children,
}: Props) => (
  <StyledHeading as={level} level={level}>
    {children}
  </StyledHeading>
);
