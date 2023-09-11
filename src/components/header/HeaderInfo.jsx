import React from "react";
import { Button } from "react-bootstrap";

const HeaderInfo = (props) => {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <div className="header-info">
      <div className="info-container">
        <Button className="btn-primary btn-edit" onClick={handleEdit}>
          Edit
        </Button>
        <img
          src="https://i.pinimg.com/originals/55/56/2b/55562baec56e3ee912749a14c68e3fea.jpg"
          alt=""
          className="info-ava"
        />
        <div className="info-username">Duong Tran</div>
        <div className="info-age">27</div>
        <div className="info-about">im a software engineer</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
