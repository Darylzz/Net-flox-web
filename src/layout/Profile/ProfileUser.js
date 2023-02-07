import "@fortawesome/fontawesome-free/css/all.css";
import "./ProfileUser.css";
import { Link } from "react-router-dom";
import Modal from "./Modal"
import { useState } from "react";
import ModalManage from "./ModalManage"
import useAuth from "../../hook/useAuth";
export default function ProfileUser({ image, name, id, openManage }) {

    const [openModal, setOpenModal] = useState(false)
    const [openManageModal, setOpenManageModal] = useState(false)
    const {authenticatedUser} = useAuth()

  return (
    <>
    {authenticatedUser && <div className="ProfileSelector1">
        <div className="ProfileBox1">
          <Link to={"/profile/" + id}>
            <img src={process.env.REACT_APP_URL + image} alt="" />
          </Link>
        </div>
        <p>{name}</p>
        {openManage && <button onClick={() => setOpenManageModal(true)}>
          <i class="fa-solid fa-pencil"></i>
        </button>}
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <ModalManage key={id} id={id} openManageModal={openManageModal} onClose={() => setOpenManageModal(false)} />
      </div>}

    </>
  );
}
