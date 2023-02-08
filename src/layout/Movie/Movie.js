import "./Movie.css"
export default function Movie({ image, name }) {
  return (
    <div className="ShowMovie">
    <div>
      <img src={process.env.REACT_APP_URL + image} alt="" />
    </div>
    <div className="MovieNameButton">
      <p>{name}</p>
      <button>+</button>
    </div>
    </div>
  );
}
