import { Movie } from "../interfaces/interface.Movie";
import { removeEmptyRatings } from "./util.removeEmptyRatings";

export interface MovieWithAverage extends Movie {
    average: number
};

export function addAverageToMoviesArray(movies: Movie[]): MovieWithAverage[] {
    const sanitizedMovies = removeEmptyRatings(movies)
    const moviesWithAverage = sanitizedMovies.map(movie => {
        let average = movie.ratings.reduce((p, c) => {
            return (p + c)
        }, 0)

        average = average / movie.ratings.length
        return {
            ...movie,
            average
        }
    })
    return moviesWithAverage
}