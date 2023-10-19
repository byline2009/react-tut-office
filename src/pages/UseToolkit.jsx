import React, { useState } from "react";
import HeaderInfo from "../components/header/HeaderInfo";
import EditHeaderInfo from "../components/edit/EditHeaderInfo";

const UseToolkit = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {edit ? (
        <EditHeaderInfo setEdit={setEdit} />
      ) : (
        <HeaderInfo setEdit={setEdit} />
      )}
    </div>
  );
};

export default UseToolkit;
