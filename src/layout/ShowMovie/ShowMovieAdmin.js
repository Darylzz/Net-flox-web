import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as movieApi from "../../api/movie-api"

export default function ShowMovie({ iFrame, name, image,id }) {
  const navigate = useNavigate()
  const [showMoviePanel, setShowMoviePanel] = useState(false)

  const handleDeleteMovie = async (movieId) => {
    await movieApi.deleteMovie(movieId)
    navigate(0)
  }
  
  return (
    <>
    <div>
      {showMoviePanel ? (
        <>
      <iframe
        width="320"
        height="180"
        src={iFrame}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
        </>
      ) : (
        <img src={process.env.REACT_APP_URL +image} alt="" />
      )}
    </div>
    <div className="AdminShowAllMovieButton">
      <p>{name}</p>
      <button onClick={() => setShowMoviePanel(!showMoviePanel)}>Show trailer</button>
      <button onClick={() => handleDeleteMovie(id)}>Delete</button>
    </div>
    </>
  );
}
