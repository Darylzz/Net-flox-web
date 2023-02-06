import axios from "../config/axios"

export const createProfile = input => axios.post("/profile", input)
export const getProfileUser = () => axios.get("/profile")
export const getProfileById = profileId => axios.get(`/profile/${profileId}`)
export const deleteProfileById = profileId => axios.delete(`/profile/${profileId}`)