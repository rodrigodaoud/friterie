import { media } from '@helpers/media';
import { BreakPoints } from '@type/globals';
import styled, { css } from 'styled-components';

export const TemplateContent = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 2fr 1fr 2fr;
  color: ${({ theme }) => theme.footer.color};
  font-size: ${({ theme }) => theme.footer.fontSize};
  max-width: 800px;
  margin: 0 auto;
  grid-gap: 1rem;
  padding: 1rem 1rem;
  align-items: center;
  justify-items: center;

  ${media(BreakPoints.md, css`
    text-align: right;
  `)}

  & img {
    width: 1.5rem;
  }
`;

export const P = styled.p`
  margin: 0;
  width: 100%;
`;
