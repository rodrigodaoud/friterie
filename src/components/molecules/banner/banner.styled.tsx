import styled from 'styled-components';

export const BannerSection = styled.section`
  position: relative;
  margin: 0 0 1rem;
`;

export const StyledLabel = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  text-transform: uppercase;
  width: 12rem;
  z-index: 2;

  & a {

    & h1:hover {
      transition: color 0.3s ease;
      color: ${({ theme }) => theme.banner.hoverColor};
    }
  }
`;

export const Opacity = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
