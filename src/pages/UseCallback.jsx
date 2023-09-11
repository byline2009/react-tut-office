import React, { useCallback, useState } from "react";
import Content from "../components/example/Content";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(
    () =>
      setCount((prevCount) => {
        return prevCount + 1;
      }),
    []
  );
  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <div style={{ paddingTop: 24 }}>
      <h1>{count}</h1>
      <Content onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
