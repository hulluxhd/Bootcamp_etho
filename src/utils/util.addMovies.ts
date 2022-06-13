import { Movie } from "../interfaces/interface.Movie";
import { User } from "../interfaces/interface.User";

export function addMovieToUserList(movie: Movie, user: User): void {
  if (user.myList) {
    user.myList = [...user.myList, movie];
  } else user.myList = [movie];
}

export function addManyMoviesWithIdAndReturnANewUser(
  user: User,
  movies: Movie[],
  ...ids: number[]
): Required<User> {
  // o que está acontencendo aqui?
  // estamos iterando sobre o array de movies que está chegando.
  // avaliamos se o id do movie que está sendo iterado corresponde a algum dos ids
  // passados por parâmetro.
  // se sim, adiciona o filme à uma nova lista
  // por fim, retorna uma nova instância de User (para tornar a função em pura)
  let newMoviesArray: Movie[] = [];
  movies.forEach((movie) => {
    const movieFound = ids.includes(movie.id);
    if (movieFound) {
      newMoviesArray.push(movie);
    }
  });

  if (user.myList) {
    return {
      ...user,
      myList: [...user.myList, ...newMoviesArray],
    };
  } else {
    return {
      ...user,
      myList: [...newMoviesArray],
    };
  }
}
