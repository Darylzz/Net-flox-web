import "./Profile.css"
import iconPlus from "../../asset/plus-button.png"
import useAuth from "../../hook/useAuth"
import { useState, useEffect } from "react"
import ProfileUser from "./ProfileUser"
import Modal from "./Modal"
import * as profileApi from "../../api/profile-api"
export default function Profile() {
    const [profileUser,setProfileUser] = useState([])

    useEffect(() => {
        const fetchProfileUser = async () => {
            const res = await profileApi.getProfileUser()
            setProfileUser(res.data.profile)
            console.log(res);
        }
        fetchProfileUser()
    },[])


    const { logout } = useAuth()
    const [openModal,setOpenModal] = useState(false)
    const [openManage, setOpenManage] = useState(false)
    return (
        <div>
        <div className="ProfileCon">
            <div className="ProfileText">
                <h1>Who's Watching?</h1>
            </div>
            <div className="ProfileSelector">
                {profileUser?.map(el=> <ProfileUser openManage={openManage} key={el.id} id={el.id} image={el.profileImage} name={el.profileName}/>)}
                {profileUser.length >= 3? "" : <div className="AddProfile">
                    <div className="AddProfileBox">
                        <button onClick={() => setOpenModal(true)}>
                        <img src={iconPlus} alt="" />
                        </button>
                    </div>
                    <p>Add Profile</p>
                </div>}
                        <Modal openModal={openModal} onClose={() => setOpenModal(false)}></Modal>
            </div>
            <div className="ProfileManageButton">
            <div className="ProfileButton">
                <button onClick={() => setOpenManage(!openManage)}>Manage Profiles</button>
            </div>
            <div className="ProfileLogout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
            </div>
        </div>
    )
}
