import axios from "../config/axios"

export const getAllMovie = () => axios.get("/movie")
export const searchMovieByName = name => axios.get(`/movie/${name}`)
export const createMovie = input => axios.post("/movie", input)