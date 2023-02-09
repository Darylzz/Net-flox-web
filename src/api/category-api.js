import axios from "../config/axios"

export const getAllCategory = () => axios.get("/category")