import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeaderInfo = (props) => {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);

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
        <div className="info-username">{user.username}</div>
        <div className="info-age">{user.age}</div>
        <div className="info-about">{user.about}</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
