import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as movieApi from "../../api/movie-api";
import "./AdminModal.css";
export default function AdminModal({ isAdminButtonInput, onClose }) {
  const navigate = useNavigate;

  const [inputCreateMovie, setInputCreateMovie] = useState({
    moviePic: "",
    movieDes: "",
    movieName: "",
    movieTrailer: "",
  });

  const handleOnChangeAdminCreate = (e) => {
    setInputCreateMovie({
      ...inputCreateMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCreateMovie = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("movieName", inputCreateMovie.movieName);
    formData.append("movieDes", inputCreateMovie.movieDes);
    formData.append("movieTrailer", inputCreateMovie.movieTrailer);
    formData.append("moviePic", inputCreateMovie.moviePic);
    await movieApi.createMovie(formData);
    setInputCreateMovie({
      moviePic: "",
      movieDes: "",
      movieName: "",
      movieTrailer: "",
    });
    navigate(0);
    onClose();
  };


  return (
    <div
      className={`AdminModalFixed ${
        isAdminButtonInput ? "AdminModal" : "AdminModal-none"
      }`}
    >
      <div className="AdminModalText">
        <h1>Create movie</h1>
      </div>
      <div className="AdminModalInput">
        <form onSubmit={handleSubmitCreateMovie}>
          <label>Movie name</label>
          <br />
          <input
            name="movieName"
            value={inputCreateMovie.movieName}
            type="text"
            placeholder="Enter movie name"
            onChange={handleOnChangeAdminCreate}
          />
          <br />
          <label>Movie description</label>
          <br />
          <input
            name="movieDes"
            value={inputCreateMovie.movieDes}
            type="text"
            placeholder="Enter movie description"
            onChange={handleOnChangeAdminCreate}
          />
          <br />
          <label>Movie link</label>
          <br />
          <input
            name="movieTrailer"
            value={inputCreateMovie.movieTrailer}
            type="text"
            placeholder="Enter movie link"
            onChange={handleOnChangeAdminCreate}
          />
          <br />
          <input
            name="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                setInputCreateMovie({
                  ...inputCreateMovie,
                  moviePic: e.target.files[0],
                });
              }
            }}
            type="file"
          />
          <br />
          <input type="radio" />
          <label>Action</label>
          <br />
          <input type="radio" />
          <label>Comedy</label>
          <br />
          <input type="radio" />
          <label>Romantic</label>
          <br />
          <input type="radio" />
          <label>Kid</label>
          <br />
          <div className="AdminModalInputButton">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
