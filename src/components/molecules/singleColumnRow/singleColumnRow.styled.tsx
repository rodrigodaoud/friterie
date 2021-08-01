import { media } from '@helpers/media';
import { BreakPoints } from '@type/globals';
import styled, { css } from 'styled-components';

interface StyledProps {
  large: boolean;
}

export const TemplateContent = styled.div<StyledProps>`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 3rem 0 6rem;
  grid-area: content;
  grid-template-columns: ${({ large }) => (large ? '100%' : '10rem')};

  ${media(BreakPoints.sm, css`
    padding: 8rem 0 12rem;
  `)}

  & h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.centeredText.title.fontSize};

    ${({ large }) => large && css`
      font-family: AcuminPro !important;
      font-size: 1.5rem;

      ${media(BreakPoints.sm, css`
        font-size: 2.5rem;
      `)}

      ${media(BreakPoints.lg, css`
        font-size: 4.5rem;
      `)}
    `}
  }

  & p {
    font-size: ${({ theme }) => theme.centeredText.subtitle.fontSize}
  }
`;
