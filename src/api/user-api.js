import axios from "../config/axios"

export const getProfileUser = profileId => axios.get(`/profile/${profileId}`)
export const getUserMe = () => axios.get("/auth/me")