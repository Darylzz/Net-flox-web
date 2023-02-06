import axios from "../config/axios"

export const createProfile = input => axios.post("/profile", input)
export const deleteProfileById = profileId => axios.delete(`/profile/${profileId}`)