import styled from 'styled-components';

export const TemplateContent = styled.section`
  grid-area: content;

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
  gap: 2rem;
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;
`;

export const InfoWrapper = styled.div`
   & h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.cardapio.infoTitle.color};
    font-size: ${({ theme }) => theme.cardapio.infoTitle.fontSize};
   }
`;
