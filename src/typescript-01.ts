import { IndicativeRating } from "./enum/enum.IndicativeRating";
import { Movie } from "./interfaces/interface.Movie";
import { User } from "./interfaces/interface.User";
import { MoviesApi } from "./service/moviesApi";
import { addManyMoviesWithIdAndReturnANewUser } from "./utils/util.addMovies";
import { sanitizedMovies } from "./utils/util.convertingApiDataToMovie";


const user: User = {
    name: "Denny",
    age: 9
}

// Math.ceil(Math.random() * 100)
const movies: Movie[] =
    [
        { id: 1, name: 'Avengers', indicativeRating: IndicativeRating.AL, ratings: [1, 3, 4] },
        { id: 2, name: 'LOTR', indicativeRating: IndicativeRating.A10, ratings: [5, 5, 5] },
        { id: 3, name: 'Dead Space', indicativeRating: IndicativeRating.A18, ratings: [] },
        { id: 4, name: 'Not', indicativeRating: IndicativeRating.A12, ratings: [1, 1, 1] }
    ]


const dataFromMoviesApi = 
            MoviesApi
            .get("/movies")
            .then(response => {
                const {data} = response.data
                console.log(sanitizedMovies(data))
            })

//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))

