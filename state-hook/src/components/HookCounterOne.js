import React, { useState, useEffect } from "react";

function HookCounterOne() {
  //   const initialState = 0;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Document title updated");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;

// useEffect runs after every render of the component

// useEffect is placed inside the component. It can easily access state and props without extra code
