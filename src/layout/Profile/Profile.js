import "./Profile.css"
import iconPlus from "../../asset/plus-button.png"
import useAuth from "../../hook/useAuth"
export default function Profile() {
    const { logout } = useAuth()
    return (
        <div className="ProfileCon">
            <div className="ProfileText">
                <h1>Who's Watching?</h1>
            </div>
            <div className="ProfileSelector">
                <div className="ProfileSelector1">
                    <div className="ProfileBox1"></div>
                    <p>Name</p>
                </div>
                <div className="ProfileSelector2">
                    <div className="ProfileBox2"></div>
                    <p>Name</p>
                </div>
                <div className="ProfileSelector3">
                    <div className="ProfileBox3"></div>
                    <p>Name</p>
                </div>
                <div className="AddProfile">
                    <div className="AddProfileBox">
                        <img src={iconPlus} alt="" />
                    </div>
                    <p>Add Profile</p>
                </div>
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
    )
}
