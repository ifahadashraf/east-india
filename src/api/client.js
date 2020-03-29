import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.eastindiatea.com/graphql/',
});
