import styled, { css } from 'styled-components';
import { BreakPoints } from '@type/globals';
import { media } from '@helpers/media';

export const Row = styled.section`
  background-color: ${({ theme }) => theme.row.backgroundColor};
  display: grid;
  grid-template-areas: "content";
  grid-template-columns: 100%;
  
  ${media(BreakPoints.sm, css`
    grid-template-areas: ". content .";
    grid-template-columns: 1fr ${BreakPoints.sm}px 1fr;
  `)}
  ${media(BreakPoints.md, css`
    grid-template-columns: 1fr ${BreakPoints.md}px 1fr;
  `)}
  ${media(BreakPoints.lg, css`
    grid-template-columns: 1fr ${BreakPoints.lg}px 1fr;
  `)}
  ${media(BreakPoints.xl, css`
    grid-template-columns: 1fr ${BreakPoints.xl}px 1fr;
  `)}
`;
