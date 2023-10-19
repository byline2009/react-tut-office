import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
const EditHeaderInfo = (props) => {
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.themeColor);
  const [url, setUrl] = useState(user.avaUrl);
  const dispatch = useDispatch();
  const avaURLs = [
    "https://i.pinimg.com/originals/55/56/2b/55562baec56e3ee912749a14c68e3fea.jpg",
    "https://i.pinimg.com/originals/32/cb/71/32cb71dc8a9f6f99fae8f3479902a7f6.jpg",
    "https://i.pinimg.com/originals/3b/af/5c/3baf5ca89aa885d8e84d21015469c0ad.jpg",
    "https://i.pinimg.com/originals/74/2d/d7/742dd7690522ec68133a60c4cbc3636f.jpg",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setEdit(false);
    const updateUser = {
      username: username,
      age: age,
      about: about,
      avaUrl: url,
    };
    dispatch(update(updateUser));
  };
  return (
    <div className="edit-header-info">
      <form>
        <div className="edit-container">
          <Button className="btn-secondary btn-edit" onClick={handleSubmit}>
            Close
          </Button>
          <h4 className="edit-profile">Edit Profile</h4>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="about"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
          <div htmlFor="">Profile Picture</div>
          <div className="input-image-container">
            {avaURLs.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=""
                className="input-image"
                onClick={(e) => {
                  setUrl(e.target.src);
                }}
              />
            ))}
          </div>
          <div className="theme-container">
            <label className="label-theme">Theme: </label>
            <input
              type="color"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditHeaderInfo;
