import { gql } from '@apollo/client';

export const QUEM_SOMOS = gql`
  query {
    quemSomos(id: "1vTka1X95VAqCPIWvR5b1H") {
      title
      image { 
        url
      }
      text
    }
  }
`;

export interface QuemSomosResponse {
  quemSomos: QuemSomosData;
}

export interface QuemSomosData {
  title: string;
  image: {
    url: string;
  }
  text: string;
}
