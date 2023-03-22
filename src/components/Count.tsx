import React from "react";

let count = 0;
const Count = () => {
  count++;

  let pureCount = 0;
  pureCount++;
  return (
    <>
      <div>Pure Count: {pureCount}</div>
      <div>Count: {count}</div>
    </>
  );
};

export default Count;
