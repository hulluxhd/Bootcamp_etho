import axios from "axios"
export const MoviesApi = axios.create({
    baseURL: "http://mcuapi.herokuapp.com/api/v1"
})