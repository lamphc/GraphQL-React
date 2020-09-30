import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
// 阿波罗查询条件
const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`


// github 例子
const GH = gql`
    query ViewerQuery {
      viewer {
        login,
        repositories(first: 100) {
          nodes {
            name,
          #  licenseInfo {
          #    id
          #  }
          }
        }
     }
    }
`

function Index () {
  // 阿波罗例子
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // return data.rates.map(({ currency, rate }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));



  // github 例子
  const { loading, data } = useQuery(GH)
  console.log(data)
  if (loading) return <h1>loading...</h1>
  const { viewer: { login, repositories: { nodes } } } = data
  return (
    <div>
      <h1>{login}</h1>
      <ul>
        {
          nodes.map((item) => {
            return <p key={item.name}>{item.name}</p>
          })
        }
      </ul>
    </div>
  )

}

export default Index