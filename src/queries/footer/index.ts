import { gql } from '@apollo/client';

export const FOOTER = gql`
  query {
    footer(id: "3KNgucqi14TnQosVh1OlJ9") {
      title
      info
    }
  }
`;

export interface FooterResponse {
  footer: FooterData;
}

export interface FooterData {
  title: string;
  info: string;
}
