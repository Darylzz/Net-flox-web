import "./ProfileUser.css";
import { Link } from "react-router-dom";
export default function ProfileUser({ image, name, id }) {
  console.log(process.env.REACT_APP_URL + image);
  return (
    <>
      <div className="ProfileSelector1">
        <div className="ProfileBox1">
          <Link to={"/profile/" + id}>
            <img src={process.env.REACT_APP_URL + image} alt="" />
          </Link>
        </div>
        <p>{name}</p>
      </div>
    </>
  );
}
