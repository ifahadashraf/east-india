import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://209.97.138.32:8000/graphql/',
});
