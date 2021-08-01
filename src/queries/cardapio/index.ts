import { gql } from '@apollo/client';

export const CARDAPIO = gql`
  query {
    cardapio(id: "2vVcEuLg2TezEpfH7fkxFe") {
      title
      image {
        url
      }
      categoryCollection (limit: 10) {
        items {
          title
          itemCollection {
            items {
              title
              description
              image {
                url
              }
              price
            }
          }
        }
      }
    }
  }
`;

export interface CardapioResponse {
  cardapio: CardapioData;
}

export interface CardapioData {
  title: string;
  image: {
    url: string;
  }
  categoryCollection: {
    items: {
      title: string;
      itemCollection: {
        items: {
          title: string;
          description: string;
          image: {
            url: string
          }
          price: number;
        }
      }
    }
  }
}
