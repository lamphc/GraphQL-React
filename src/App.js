import React from 'react'
import logo from './logo.svg'
import './App.css'

import { ApolloProvider } from '@apollo/react-hooks'
// 示例配置
import client from './graphql'
// github配置
import client_github from './graphql/github'
// 页面
import Index from './pages/Index'
// import Hook from './pages/Hook';

function App () {
  return (
    // 配置react hook
    // <ApolloProvider client={client}>
    <ApolloProvider client={client_github}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* 调用组件 */}
          <Index />
          {/* <Hook /> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
