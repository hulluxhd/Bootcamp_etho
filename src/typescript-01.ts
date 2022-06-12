import { IndicativeRating } from "./enum/enum.IndicativeRating";
import { Movie } from "./interfaces/interface.Movie";
import { User } from "./interfaces/interface.User";
import { BaseService } from "./service/service.BaseService";
import { MovieService } from "./service/service.MovieService";
import { addManyMoviesWithIdAndReturnANewUser } from "./utils/util.addMovies";
import { sanitizedMovies } from "./utils/util.convertingApiDataToMovie";


const user: User = {
    name: "Denny",
    age: 9
}

const request = new MovieService()
request.listAllMovies().then(resp => console.log(resp))


//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))

