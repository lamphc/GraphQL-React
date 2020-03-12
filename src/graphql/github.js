import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const token = "8c5a1d4972d761f0c289323b76d0ac49619a7ba7";

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
// client.query({
//   query: gql`
//     query ViewerQuery {
//       viewer {
//         login
//      }
//     }
//   `
// })
//   .then(resp => console.log(resp.data.viewer.login))
//   .catch(error => console.error(error));