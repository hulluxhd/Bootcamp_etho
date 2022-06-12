import { Movie } from "../interfaces/interface.Movie";

/* DTO é uma camada de tráfego de dados e é utilizada apenas para esse fim.
Com a implementação do DTO o cliente não tem nenhum acesso extra permitido 
ao sistema da API e só lhe é mostrado o que é passado por essa camada, no backend.
Pelo que entendi, também podemos aplicar uma camada de DTO no front para tratar os dados
antes de eles serem consumidos. */
interface MoviesFromApiDTO {
    id: number,
    title: string,
    duration: number,
    directed_by: string 
}

export function sanitizedMovies(data: MoviesFromApiDTO[]): Omit<Movie, "indicativeRating" | "ratings">[]{
    return data.map((movie)=>({
        id: movie.id,
        name: movie.title,
        duration: movie.duration,
        directedBy: movie.directed_by
    }))
}
