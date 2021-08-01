import styled, { css } from 'styled-components';
import { media } from '@helpers/media';
import { BreakPoints } from '@type/globals';

export const TemplateContent = styled.section`
  grid-area: content;
  padding: 2rem 1rem 6rem;

  & .accordion {
    display: flex;
    flex-direction: column;

    & button {
      width: 10rem;
      border: none;
      margin: 0 0 1rem;
      
      & h2 {
        transition: color 0.3s ease;
        text-transform: uppercase;
        font-size: 1.5rem;

        &:hover {
          color: ${({ theme }) => theme.cardapio.infoTitle.color}
        }
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 30rem;

  & img {
    border-radius: 0.25rem;
    height: 15rem;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin: 0 0 2rem;
  gap: 2rem;
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;

  ${media(BreakPoints.xl, css`
    flex-direction: row;
  `)}
`;

export const InfoWrapper = styled.div`
   & h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.cardapio.infoTitle.color};
    font-size: ${({ theme }) => theme.cardapio.infoTitle.fontSize};
   }
`;
