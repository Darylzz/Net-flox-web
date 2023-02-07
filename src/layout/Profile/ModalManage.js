import { useState } from "react";
import "./ModalManage.css";
import * as profileApi from "../../api/profile-api";
import { useNavigate } from "react-router-dom";
export default function ModalManage({ openManageModal, onClose, id }) {
  const navigate = useNavigate();

  const [editProfileInput, setEditProfileInput] = useState({
    name: "",
    file: "",
  });

  console.log(editProfileInput);

  const handleChangeEditInput = (e) => {
    setEditProfileInput({
      ...editProfileInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitFormManageModal = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", editProfileInput.file);
    formData.append("title", editProfileInput.name);
    await profileApi.updateProfileById(id,formData);
    setEditProfileInput({
      name: "",
      file: "",
    });
    navigate(0);
    onClose();
  };

  const handleClickButtonDelete = async () => {
    await profileApi.deleteProfileById(id)
    navigate(0)
    onClose()
  }

  return (
    <div className={`fixed ${openManageModal ? "ModalManage" : "d-none"}`}>
      {/* <div className="ManageModal"> */}
      <div className="ModalManageInputText">
        <h1>Edit Profile</h1>
      </div>
      <div className="ModalManageInput">
        <form onSubmit={handleSubmitFormManageModal}>
          <input
            type="text"
            name="name"
            value={editProfileInput.name}
            onChange={handleChangeEditInput}
          />
          <br />
          <input
            type="file"
            name="file"
            onChange={(e) => {
              setEditProfileInput({
                ...editProfileInput,
                file: e.target.files[0],
              });
            }}
          />
          <br />
          <div className="ModalManageInputButton">
            <button type="submit">Save</button>
            <button onClick={onClose}>Cancel</button>
            <button type="button" onClick={handleClickButtonDelete}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
