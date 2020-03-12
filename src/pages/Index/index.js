import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// const EXCHANGE_RATES = gql`
//   {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

const GH = gql`
    query ViewerQuery {
      viewer {
        repositories(name: "react") {
          id
          name
          diskUsage
        }
     }
    }
`;
// 支持函数组件
function Index() {
  const { loading, data } = useQuery(GH);
  console.log(data)
  if (loading) return <h1>loading...</h1>;
  else return <h2>{data.viewer.login}</h2>


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
}

export default Index;