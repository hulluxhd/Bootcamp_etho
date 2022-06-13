import inquirer from "inquirer";
import { Movie } from "./interfaces/interface.Movie";
import { User } from "./interfaces/interface.User";
import { MovieService } from "./service/service.MovieService";
import { addAverageToMoviesArray } from "./utils/util.addAverageToMoviesArray";
import { addManyMoviesWithIdAndReturnANewUser } from "./utils/util.addMovies";

const users: User[] = [
  {
    id: 1,
    name: "Denny",
    age: 9,
  },
];

let movies: Movie[];

let loggedUser: User;

const baseQuestions = [
  {
    type: "input",
    name: "option",
    message:
      "Digite uma opção: \n 1 - Ver filmes \n 2 - Dar avaliação \n 3 - Mostrar filmes com média \n 4 - Adicionar filme à minha lista \n 5 - Mostrar minha lista \n 0 - Sair \n>>>",
  },
];

const chooseMovieQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual filme?\n>>>",
  },
];

const addMovieQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual(is) filme(s)? ex: 1, 2, 3, 4\n>>>",
  },
];



const loginQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual é o seu id de usuário?\n>>>",
  },
];

const rateQuestions = [
  {
    type: "input",
    name: "option",
    message: "Qual avaliacao de 0 a 5?\n>>>",
  },
];

const exitQuestions = [
  {
    type: "input",
    name: "option",
    message: "Digite seu id | Sair [0]?\n>>>",
  },
];

const possibleAnswers = {
  DOWNLOAD: "1",
  RATE_MOVIE: "2",
  SHOW_MOVIES_WITH_AVERAGE: "3",
  ADD_TO_USER_LIST: "4",
  SHOW_USER_LIST: "5",
  EXIT: "0",
};

const questions = {
  addMovieQuestions,
  baseQuestions,
  chooseMovieQuestions,
  loginQuestions,
  rateQuestions,
  exitQuestions

}

async function login(){
  const {option} = await inquirer.prompt(loginQuestions);

  const findUser = (option: string) => users.find(
    (user) => user.id == parseInt(option)
    );

  let userFound = findUser(option)

  if (userFound){
    loggedUser = userFound
    console.log("Usuário logado: " + loggedUser.name);
  } 
  else {

    while(!userFound){
      console.log("Usuário não encontrado. Aperte 0 para sair.")
      const {option} = await inquirer.prompt(questions.exitQuestions)

      if(parseInt(option) == 0) break

      userFound = findUser(option)
      
      if (userFound) {
        loggedUser = userFound
        console.log("Usuário logado: " + loggedUser.name);
      } 
    }
  }
}

async function run() {
  const movieService = new MovieService();
  movies = await movieService.listAllMovies();

  const seeMovies = () => movies.forEach(movie => console.log(`${movie.id} - ${movie.name}`))
  
  seeMovies()
  
  loggedUser ? console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*") :  await login()
  
  const answers = await inquirer.prompt(questions.baseQuestions);

  switch (answers.option) {
    case possibleAnswers.DOWNLOAD:
      seeMovies()
      run()
      break;

    case possibleAnswers.RATE_MOVIE:
      let movieId: string;
      let rate: string;

      const chooseMovieAnswers = await inquirer.prompt(questions.chooseMovieQuestions);
      movieId = chooseMovieAnswers.option;

      const rateAnswers = await inquirer.prompt(questions.rateQuestions);
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
      run();

      break;

    case possibleAnswers.ADD_TO_USER_LIST:
      const movieAnswer = await inquirer.prompt(addMovieQuestions);

      const movieListToAdd = movieAnswer.option
        .split(",")
        .map((i: string) => parseInt(i));

      loggedUser = addManyMoviesWithIdAndReturnANewUser(
        loggedUser,
        movies,
        ...movieListToAdd
      );

      console.log("Filme(s) adicionados");

      run();

      break;

    case possibleAnswers.SHOW_USER_LIST:
      loggedUser.myList?.forEach((movie) => {

        const duration = (movie.duration / 60).toString().slice(0, 4)

        console.log(
          `id: ${movie.id} | ${movie.name} | ${duration} horas`
        );
      });

      run();

      break;

    case possibleAnswers.EXIT:
      break;
  }
}

run();

//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))
