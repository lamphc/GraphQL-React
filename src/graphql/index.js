import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

// 创建graphql服务
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default client;

// invoke
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));