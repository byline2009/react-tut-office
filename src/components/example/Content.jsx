import React from "react";
import { memo } from "react";

const Content = (props) => {
  console.log("re-render");
  return (
    <>
      <div>Hello toi la Content</div>
      <button onClick={() => props.onClick()}>Add</button>
    </>
  );
};

export default memo(Content);
