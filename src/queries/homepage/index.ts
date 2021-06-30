import { gql } from '@apollo/client';

export const HOMEPAGE = gql`
  query {
    homepage(id: "3GxxstRvH0oOlAU6g7cnj2") {
      title
      slidesCollection {
        items {
          url
        }
      }
      deliveryLabel
      deliveryBanner {
        url
      }
    }
  }
`;

export interface HomepageResponse {
  homepage: HomepageData;
}

export interface HomepageSlides {
  items: Array<{
    url: string;
  }>
}

export interface HomepageData {
  title: string;
  slidesCollection: HomepageSlides;
  deliveryLabel: string;
  deliveryBanner: {
    url: string;
  }
}
