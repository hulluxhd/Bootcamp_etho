import { Movie } from "../interfaces/interface.Movie";


export function removeEmptyRatings(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.ratings.length)
}