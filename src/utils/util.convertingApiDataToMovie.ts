import { Movie } from "../interfaces/interface.Movie";
import { MoviesApi } from "../service/moviesApi";

interface MoviesFromApiDTO {
    id: number,
    title: string
}

export function sanitizedMovies(data: MoviesFromApiDTO[]): Partial<Movie>[]{
    return data.map((movie)=>({
        id: movie.id,
        name: movie.title
    }))
}
