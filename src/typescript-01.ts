import inquirer from "inquirer";
import { User } from "./interfaces/interface.User";
import { MovieService } from "./service/service.MovieService";

//Generics

const user: User = {
    name: "Denny",
    age: 9
}

const request = new MovieService()
//request.listAllMovies().then(resp => console.log(resp))


const questions = [
    {
        type: "input",
        name: "option",
        message: "Digite uma opção: \n 1 - Baixar filmes \n 2 - Sair"
    }
]

inquirer.prompt(questions).then(answers => 
        console.log(answers)
    )






//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))

