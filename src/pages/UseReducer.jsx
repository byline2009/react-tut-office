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
const UserReducer = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });

  return (
    <>
      <div className="button">
        <button onClick={() => dispatch({ type: "countUp" })}>+1</button>
        <p>Count: {state.count}</p>
      </div>
    </>
  );
};

export default UserReducer;
