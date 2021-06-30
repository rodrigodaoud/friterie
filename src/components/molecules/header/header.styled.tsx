import { media } from '@helpers/media';
import { BreakPoints } from '@type/globals';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.color};
`;

export const TemplateContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  gap: 1rem;
  margin: 0 0 0 auto;
  font-size: 0.75rem;
  padding: 2rem 1rem;
  white-space: nowrap;
  text-align: right;


  ${media(BreakPoints.sm, css`
    font-size: 0.875rem;
  `)}

  ${media(BreakPoints.md, css`
    flex-direction: row;
    margin: 0;
    justify-content: space-between;
  `)}
`;

export const LinkSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;

  ${media(BreakPoints.sm, css`
    margin: 0 0 0 16rem;
  `)}

  ${media(BreakPoints.xxl, css`
    margin: 0 0 0 12rem;
  `)}
`;

export const Logo = styled.div`
  position: absolute;
  top: 3rem;
  left: 1rem;
  width: 8rem;
  z-index: 1;

  ${media(BreakPoints.sm, css`
    top: 1.5rem;
    left: 10%;
    width: 10rem;
  `)}
`;
