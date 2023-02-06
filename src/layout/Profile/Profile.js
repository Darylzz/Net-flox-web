import "./Profile.css"
import {Link} from "react-router-dom"
import iconPlus from "../../asset/plus-button.png"
import useAuth from "../../hook/useAuth"
import userAvatar from "../../asset/user-avatar.png"
import { useState } from "react"
import Modal from "./Modal"
export default function Profile() {
    const { logout } = useAuth()
    const [open,setOpen] = useState(false)
    return (
        <div>
        <div className="ProfileCon">
            <div className="ProfileText">
                <h1>Who's Watching?</h1>
            </div>
            <div className="ProfileSelector">
                <div className="ProfileSelector1">
                    <div className="ProfileBox1">
                        <Link to="/">
                        <img src={userAvatar} alt=""/>
                        </Link>
                    </div>
                    <p>Name</p>
                </div>
                <div className="ProfileSelector2">
                    <div className="ProfileBox2">
                    <img src={userAvatar} alt=""/>
                    </div>
                    <p>Name</p>
                </div>
                <div className="ProfileSelector3">
                    <div className="ProfileBox3">
                    <img src={userAvatar} alt=""/>
                    </div>
                    <p>Name</p>
                </div>
                <div className="AddProfile">
                    <div className="AddProfileBox">
                        <button onClick={() => setOpen(true)}>
                        <img src={iconPlus} alt="" />
                        </button>
                    </div>
                    <p>Add Profile</p>
                </div>
                        <Modal open={open} onClose={() => setOpen(false)}></Modal>
            </div>
            <div className="ProfileManageButton">
            <div className="ProfileButton">
                <button>Manage Profiles</button>
            </div>
            <div className="ProfileLogout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
            </div>
        </div>
    )
}
