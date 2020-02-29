import { gql } from 'apollo-boost';

export const getNProducts = (pageSize, categoryId, after = '', search = '') => gql`
{
  products(after: "${after}", first: ${pageSize}, filter:{ categories:"${categoryId}", search: "${search}" }) {
    edges {
      node {
        id
        name
        description
        thumbnail {
          url
          alt
          __typename
        }
        thumbnail2x: thumbnail(size: 510) {
          url
          __typename
        }
        variants {
          name
        }
        images {
          url
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      __typename
    }
  }
}
`;

export const getProductById = id => gql`
fragment BasicProductFields on Product {
  id
  name
  thumbnail {
    url
    alt
    __typename
  }
  thumbnail2x: thumbnail(size: 510) {
    url
    __typename
  }
  __typename
}

fragment SelectedAttributeFields on SelectedAttribute {
  attribute {
    id
    name
    __typename
  }
  values {
    id
    name
    __typename
  }
  __typename
}

fragment Price on TaxedMoney {
  gross {
    amount
    currency
    __typename
  }
  net {
    amount
    currency
    __typename
  }
  __typename
}

fragment ProductVariantFields on ProductVariant {
  id
  sku
  name
  stockQuantity
  isAvailable
  images {
    id
    url
    alt
    __typename
  }
  pricing {
    onSale
    priceUndiscounted {
      ...Price
      __typename
    }
    price {
      ...Price
      __typename
    }
    __typename
  }
  attributes {
    attribute {
      id
      name
      __typename
    }
    values {
      id
      name
      value: name
      __typename
    }
    __typename
  }
  __typename
}

fragment ProductPricingField on Product {
  pricing {
    onSale
    priceRangeUndiscounted {
      start {
        ...Price
        __typename
      }
      stop {
        ...Price
        __typename
      }
      __typename
    }
    priceRange {
      start {
        ...Price
        __typename
      }
      stop {
        ...Price
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

query ProductDetails {
  product(id: "${id}") {
    ...BasicProductFields
    ...ProductPricingField
    description
    category {
      id
      name
      products(first: 4) {
        edges {
          node {
            ...BasicProductFields
            description
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    images {
      id
      url
      __typename
    }
    attributes {
      ...SelectedAttributeFields
      __typename
    }
    variants {
      ...ProductVariantFields
      __typename
    }
    seoDescription
    seoTitle
    isAvailable
    __typename
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

export const registerAccount = (email, password) => gql`
mutation {
  accountRegister(input: {email: "${email}", password: "${password}", redirectUrl: "http://localhost:3000/account-confirm/"}) {
    errors {
      field
      message
      __typename
    }
    requiresConfirmation
    __typename
  }
}
`;
