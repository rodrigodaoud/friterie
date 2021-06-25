import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const graphqlURI = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`;

const apolloClient = new ApolloClient({
  uri: graphqlURI,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default apolloClient;
