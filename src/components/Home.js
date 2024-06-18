import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("Button clicked");
  }

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Home;
