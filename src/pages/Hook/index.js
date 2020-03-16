import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('mounted|update:', count)
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count}times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;