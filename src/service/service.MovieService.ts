import { sanitizedMovies } from "../utils/util.convertingApiDataToMovie";
import { BaseService } from "./service.BaseService";

// POO é massa demais, bixo!
export class MovieService extends BaseService {
     constructor(){
         super()
     }

     async listAllMovies(){
         const result = (await this.getInstance().get("/movies")).data.data
         return sanitizedMovies(result)
     }

     listAllTvShows(){
        return this.getInstance().get("/tvshows")
    }
}