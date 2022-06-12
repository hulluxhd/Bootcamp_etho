import axios, {AxiosInstance} from "axios"

export class BaseService {
    private axiosInstance: AxiosInstance;
    private baseApiMoviesURL = "http://mcuapi.herokuapp.com/api/v1"

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: this.baseApiMoviesURL
        })
    }

    getInstance(){
        return this.axiosInstance
    }
}   


    
