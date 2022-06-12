import { Movie } from "../interfaces/interface.Movie";
import { User } from "../interfaces/interface.User";


export function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
    return movies.filter((movie) => movie.indicativeRating < user.age)
}