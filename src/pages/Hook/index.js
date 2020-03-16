import React, { useState, useEffect } from 'react';

import sty from './index.module.css'

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('mounted|update:', count)
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={sty.box}>
      <p>You clicked {count} times</p>
      <a className={[sty.btn, sty.blu].join(' ')} onClick={() => setCount(count + 1)}>
        Click me
      </a>
    </div>
  );
}

export default Example;