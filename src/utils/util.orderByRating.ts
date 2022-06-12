import { Movie } from "../interfaces/interface.Movie"
import { addAverageToMoviesArray, MovieWithAverage } from "./util.addAverageToMoviesArray"
import { removeEmptyRatings } from "./util.removeEmptyRatings"
import { sortingByAverage } from "./util.sortingByAverage"

export function orderByRating(movies: Movie[]): MovieWithAverage[] {
    const filtered = removeEmptyRatings(movies)
    const moviesWithAverage = addAverageToMoviesArray(filtered)
    const orderedMovies = sortingByAverage(moviesWithAverage)

    return orderedMovies
}