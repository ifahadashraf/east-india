import { gql } from 'apollo-boost';

export const GET_N_PRODUCTS = pageSize => gql`
{
  products(first: ${pageSize}) {
    edges {
      node {
        id
        name
        variants {
          name
        }
        images {
          url
        }
      }
    }
  }
}
`;
