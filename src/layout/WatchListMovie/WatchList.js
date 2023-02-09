import "./WatchList.css"
export default function WatchList({ image, name }) {

    return (
        <div className="WatchListMovie">
            <div>
                <img src={process.env.REACT_APP_URL + image} alt="" />
            </div>
            <div className="WatchListMovieButton">
                <p>{name}</p>
                <button>x</button>
            </div>
        </div>
    )
}