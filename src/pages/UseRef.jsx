import { Button } from "react-bootstrap";
import React from "react";
import { useRef, useState } from "react";
const UseRef = () => {
  const inputElement = useRef();
  const [count, setCount] = useState(60);

  let timerId = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    console.log("Start", timerId.current);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop", timerId.current);
  };

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>

      <h4>{count}</h4>
      <Button variant="primary" onClick={handleStart}>
        Start
      </Button>
      <Button variant="primary" onClick={handleStop}>
        Stop
      </Button>
    </>
  );
};

export default UseRef;
