import { gql } from '@apollo/client';

export const HEADER = gql`
  query {
    header(id: "3aqcltEwaWvvyUwGE0dWw0") {
      title
    }
  }
`;

export interface HeaderData {
  homepage: {
    title: string;
  }
}
