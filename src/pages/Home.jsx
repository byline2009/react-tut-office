import React, { useReducer } from "react";
const myReducer = (state, action) => {
  switch (action.type) {
    case "countUp":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
const Home = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });

  return (
    <>
      <div> Day la Home</div>;
      <div className="button">
        <button onClick={() => dispatch({ type: "countUp" })}>+1</button>
        <p>Count: {state.count}</p>
      </div>
    </>
  );
};

export default Home;
