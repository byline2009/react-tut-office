import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditHeaderInfo = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("27");
  const [about, setAbout] = useState("");
  const [theme, setTheme] = useState("#fff000");
  const [url, setUrl] = useState("");
  const avaURLs = [
    "https://i.pinimg.com/originals/55/56/2b/55562baec56e3ee912749a14c68e3fea.jpg",
    "https://i.pinimg.com/originals/32/cb/71/32cb71dc8a9f6f99fae8f3479902a7f6.jpg",
    "https://i.pinimg.com/originals/3b/af/5c/3baf5ca89aa885d8e84d21015469c0ad.jpg",
    "https://i.pinimg.com/originals/74/2d/d7/742dd7690522ec68133a60c4cbc3636f.jpg",
  ];
  return (
    <div className="edit-header-info">
      <form>
        <div className="edit-container">
          <Button className="btn-secondary btn-edit">Close</Button>
          <h4 className="edit-profile">Edit Profile</h4>
          <input type="text" placeholder="username" value={username} />
          <input type="text" placeholder="age" value={age} />
          <textarea type="text" placeholder="about" value={about} />
          <div htmlFor="">Profile Picture</div>
          <div className="input-image-container">
            {avaURLs.map((url) => (
              <img src={url} alt="" className="input-image" />
            ))}
          </div>
          <div className="theme-container">
            <label className="label-theme">Theme: </label>
            <input type="color" value={theme} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditHeaderInfo;
