import { gql } from '@apollo/client';

export const HEADER = gql`
  query {
    header(id: "3aqcltEwaWvvyUwGE0dWw0") {
      title
      logo {
        url
      }
      itemsCollection {
        items {
          title
        }
      }
    }
  }
`;

export interface HeaderResponse {
  header: HeaderData;
}

export interface HeaderItems {
  items: Array<{
    title: string;
  }>
}

export interface HeaderData {
  itemsCollection: HeaderItems;
  title: string;
  logo: {
    url: string;
  }
}
