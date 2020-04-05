import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const token = "084a47a13b2c3c1a3ad8a03d1f18da34fa236b4e";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
  cache: new InMemoryCache()
});

export default client

// invoke
client.query({
  query: gql`
    query ViewerQuery {
      viewer {
        login
     }
    }
  `
})
  .then(resp => console.log(resp))
  .catch(error => console.error(error));