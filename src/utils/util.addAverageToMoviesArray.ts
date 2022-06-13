import { Movie } from "../interfaces/interface.Movie";

export interface MovieWithAverage extends Movie {
  average: number;
}

export function addAverageToMoviesArray(movies: Movie[]): MovieWithAverage[] {
  const moviesWithAverage = movies.map((movie) => {
    let average = movie.ratings.reduce((p, c) => {
      return p + c;
    }, 0);

    average = average / movie.ratings.length;
    return {
      ...movie,
      average,
    };
  });
  return moviesWithAverage;
}
