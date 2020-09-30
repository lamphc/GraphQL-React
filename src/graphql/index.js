import ApolloClient from 'apollo-boost'
import { gql } from "apollo-boost"

// 创建graphql服务
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

export default client

// invoke =>接口调用
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `
  })
  .then(result => console.log(result))