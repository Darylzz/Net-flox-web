import { useState } from "react";
import "./Modal.css";
import * as profileApi from "../../api/profile-api";
import { useNavigate } from "react-router-dom";
export default function Modal({ open, onClose }) {

    const navigate = useNavigate()
    
  const [profileInput, setProfileInput] = useState({
    name: "",
    file: "",
  });
  const handleOnChangeProfile = (e) => {
    setProfileInput({ ...profileInput, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    const formData = new FormData();
    formData.append("profileImage", profileInput.file);
    formData.append("title", profileInput.name);
    e.preventDefault();
    await profileApi.createProfile(formData);
    setProfileInput({
      name: "",
      file: "",
    });
    navigate(0)
    onClose()
  };

  return (
    <div //style={{display: open? "block" : "none"}}
      className={`fixed ${open ? "ProfileModal transition" : "d-none"}`}
    >
      <div className="ProfileModalInputText">
        <h1>Edit Profile</h1>
      </div>
      <div
        className="ProfileModalInput"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter your profile name"
            name="name"
            value={profileInput.name}
            onChange={handleOnChangeProfile}
          />
          <br />
          <input
            type="file"
            name="file"
            // value={profileInput.file}

            onChange={(e) => {
              if (e.target.files[0]) {
                setProfileInput({ ...profileInput, file: e.target.files[0] });
              }
            }}
          />
          <br />
          <div className="ProfileModalInputButton">
            <button type="submit">Save</button>
            <button onClick={onClose}>Cancel</button>
            <button>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
