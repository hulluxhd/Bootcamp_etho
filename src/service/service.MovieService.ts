import { sanitizedMovies } from "../utils/util.convertingApiDataToMovie";
import { BaseService } from "./service.BaseService";

interface MoviesFromApiDTO {
    id: number,
    title: string,
    duration: number,
    directed_by: string 
}

interface ResponseAPI {
    data: MoviesFromApiDTO[]
}

// POO é massa demais, bixo!
export class MovieService extends BaseService {
     constructor(){
         super()
     }

     async listAllMovies(){
         const result = (await this.getInstance().get<ResponseAPI>("/movies")).data.data
         return sanitizedMovies(result)
     }

     listAllTvShows(){
        return this.getInstance().get("/tvshows")
    }
}