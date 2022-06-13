import inquirer from "inquirer";
import { Movie } from "./interfaces/interface.Movie";
import { User } from "./interfaces/interface.User";
import { MovieService } from "./service/service.MovieService";
import { addAverageToMoviesArray } from "./utils/util.addAverageToMoviesArray";

//Generics

const users: User[] = [
  {
    id: 1,
    name: "Denny",
    age: 9,
  },
];

let movies: Movie[];

let loggedUser: User;

const request = new MovieService();
//request.listAllMovies().then(resp => console.log(resp))

const questions = [
  {
    type: "input",
    name: "option",
    message:
      "Digite uma opção: \n 1 - Baixar Filmes \n 2 - Login \n 3 - Dar avaliação \n 4 - Mostrar filmes com média \n 0 - Sair",
  },
];

const chooseMovieQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual filme?",
  },
];

const loginQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual é o seu id de usuário?",
  },
];

const rateQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual avaliacao de 0 a 5?",
  },
];

const possibleAnswers = {
  DOWNLOAD: "1",
  LOGIN: "2",
  RATE_MOVIE: "3",
  SHOW_MOVIES_WITH_AVERAGE: "4",
  EXIT: "0",
};

async function run() {
  const answers = await inquirer.prompt(questions);

  const movieService = new MovieService();

  switch (answers.option) {
    case possibleAnswers.DOWNLOAD:
      movies = await movieService.listAllMovies();
      console.log(movies);
      run();
      break;

    case possibleAnswers.LOGIN:
      const loginAnswer = await inquirer.prompt(loginQuestions);
      const userFound = users.find((user) => user.id == parseInt(loginAnswer));
      console.log(userFound);
      if (userFound) {
        loggedUser = userFound;
        console.log("Usuário logado: " + loggedUser.name);
      }
      run();
      break;
    case possibleAnswers.RATE_MOVIE:
      let movieId: string;
      let rate: string;

      const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
      movieId = chooseMovieAnswers.option;

      const rateAnswers = await inquirer.prompt(rateQuestions);
      rate = rateAnswers.option;

      const movieIndex = movies.findIndex(
        (movie) => movie.id == parseInt(movieId)
      );
      movies[movieIndex].ratings.push(parseInt(rate));
      console.log(movies[movieIndex]);
      run();

      break;
    case possibleAnswers.SHOW_MOVIES_WITH_AVERAGE:
      console.log(addAverageToMoviesArray(movies));
    case possibleAnswers.EXIT:
      break;
  }
}

run();

//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))
