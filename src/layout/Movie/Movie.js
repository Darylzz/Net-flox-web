import "./Movie.css";
export default function Movie({ image, name }) {
  // const navigate = useNavigate();

  // const handleAddWatchList = async (e) => {
  //   e.preventDefault();
  //   await watchListApi.addWatchList();
  //   navigate(0);
  // };

  return (
    <div className="ShowMovie">
      <div>
        <img src={process.env.REACT_APP_URL + image} alt="" />
      </div>
      <div className="MovieNameButton">
        <p>{name}</p>
        <button onClick={handleAddWatchList}>+</button>
      </div>
    </div>
  );
}
