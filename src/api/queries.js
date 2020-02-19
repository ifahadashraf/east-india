import { gql } from 'apollo-boost';

export const getNProducts = (pageSize, categoryId) => gql`
{
  products(first: ${pageSize}, filter:{ categories:"${categoryId}"}) {
    edges {
      node {
        id
        name
        description
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

export const getProductById = id => gql`
{
  product(id: "${id}") {
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
`;

export const getNCategories = pageSize => gql`
{
  categories(first: ${pageSize}) {
    edges {
      node {
        id
        name
      }
    }
  }
}
`;
