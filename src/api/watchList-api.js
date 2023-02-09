import axios from "../config/axios";

export const addWatchList = (profileId, movieId) =>
  axios.post(`/watchlist/${profileId}/${movieId}`);
export const findWatchListByProfileId = (profileId) =>
  axios.get(`/watchlist/${profileId}`);
export const deleteWatchList = (watchListId, profileId) =>
  axios.delete(`/watchList/${watchListId}/${profileId}`);
