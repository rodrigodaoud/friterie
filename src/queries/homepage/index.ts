import { gql } from '@apollo/client';

export const HOMEPAGE = gql`
  query {
    homepage(id: "3GxxstRvH0oOlAU6g7cnj2") {
      title
    }
}
`;
