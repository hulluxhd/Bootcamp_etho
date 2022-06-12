import { MovieWithAverage } from "./util.addAverageToMoviesArray"

export function sortingByAverage(movies: MovieWithAverage[]): MovieWithAverage[] {
    const sorted =
        movies.sort((prev, cur) => {
            if (prev.average < cur.average) {
                return 1
            }
            if (prev.average > cur.average) {
                return -1
            }
            return 0
        })
    return sorted
}
