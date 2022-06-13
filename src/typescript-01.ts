import inquirer from "inquirer";
import { Movie } from "./interfaces/interface.Movie";
import { User } from "./interfaces/interface.User";
import { MovieService, MoviesFromApiDTO } from "./service/service.MovieService";
import { addAverageToMoviesArray } from "./utils/util.addAverageToMoviesArray";
import { addMovieToUserList } from "./utils/util.addMovies";
import { removeEmptyRatings } from "./utils/util.removeEmptyRatings";



const users: User[] = [{
    id: 1,
    name: "Denny",
    age: 9
}]

function questions(){
    if(loggedUser){
        return {
            possibleAnswers: possibleAnswers[1],
            questions: questionsWithLoggedUser
        }
    }
    return {
        possibleAnswers: possibleAnswers[0],
        questions: baseQuestions
    }
}


const possibleAnswers = 
[
    {
        LIST_MOVIES:                 "1",
        LOGIN:                       "2",
        LIST_MOVIES_WITH_AVERAGE:    "3",
        EXIT:                        "0",
    },
    {
        LIST_MOVIES:                 "1",
        DISCONNECT:                  "2",
        LIST_MOVIES_WITH_AVERAGE:    "3",
        RATE_MOVIE:                  "4",
        ADD_MOVIE_TO_LIST:           "5",
        EXIT:                        "0",
    }

]

const baseQuestions = [
    {
        type: "input",
        name: "option",
        message: "Digite uma opção: \n 1 - Ver filmes disponíveis \n 2 - Logar usuário \n 3 - Listar filmes com média (!implementado) \n 0 - Sair \n>>>"
    }
]

const questionsWithLoggedUser = [
    {
        type: "input",
        name: "option",
        message: "Digite uma opção: \n 1 - Ver filmes disponíveis \n 2 - Desconectar \n 3 - Listar filmes com média (!implementado) \n 4 - Adicionar nota a um filme \n 5 - Adicionar um filme à minha lista \n 0 - Sair \n>>>"
    }
]

const loginQuestions = [
    {
        type: "input",
        name: "option",
        message: "Digite seu ID de usuário \n>>>"
    }
]

const rateQuestions1 = [
    {
        type: "input",
        name: "option",
        message: "Qual é o id do filme?  \n>>>"
    }, 
    
]

const rateQuestions2 = [
    {
        type: "input",
        name: "option",
        message: "Qual é a nota que você daria para o filme?  \n>>>"
    }
]

const addToListQuestions = [
    {
        type: "input",
        name: "option",
        message: "Qual o id do filme que deseja adicionar à sua lista?  \n>>>"
    }
]

let loggedUser: User;

let movies: Movie[];
function findMovie(movieID: number){
    const movieIndex = movies.findIndex((movie) => movie.id == movieID)
    return movies[movieIndex]
}
function addRateToMovie(moviedID: number, value: number){
    const movie = findMovie(moviedID)
    movie.ratings.push(value)
    console.log(movie)
}

async function run() {
    const questionsR = questions()
    const answers = await inquirer.prompt(questionsR.questions);
    const movieService = new MovieService();
    switch (answers.option) {

        case questionsR.possibleAnswers.LIST_MOVIES:
            movies = await movieService.listAllMovies();
            console.log(movies)
            run()
            break

        case questionsR.possibleAnswers.LOGIN: 

            const answersLogin = await inquirer.prompt(loginQuestions);
            const searchForId = users.find(user => user.id == answersLogin.option)

            if(searchForId){
                loggedUser = searchForId
                console.log(`Usuário logado: ${loggedUser.name}`)
                run()
            } else {
                console.log("Usuário não encontrado")
                run()
            } 

            break
        
        /* case questionsR.possibleAnswers.LIST_MOVIES_WITH_AVERAGE: 
            try{
                console.log(addAverageToMoviesArray(removeEmptyRatings(movies)))
            } catch(e) {
                console.log("Ainda não há avaliações para os filmes")
            } finally {
                console.log('erro')
            }
            run() */

        case questionsR.possibleAnswers.DISCONNECT:
            console.log("Usuário desconectado")
            // destruir os dados de loggedUser ?
            run()
        
        case questionsR.possibleAnswers.RATE_MOVIE:
            const answersRate1 = await inquirer.prompt(rateQuestions1);
            const answersRate2 = await inquirer.prompt(rateQuestions2);

            addRateToMovie(answersRate1.option, answersRate2.option)

            console.log(`Nota do filme adicionada: + ${answersRate2.option}` )
            
            run()
        
        case questionsR.possibleAnswers.ADD_MOVIE_TO_LIST: 
            const answersList = await inquirer.prompt(addToListQuestions);
            const movie = findMovie(answersList)
            //addMovieToUserList()
            console.log("Filme adicionado")
            console.log(loggedUser)
        case questionsR.possibleAnswers.EXIT: 
            break;
        default:
            run()
    }

}

run()







//console.log(addManyMoviesWithIdAndReturnANewUser(user, movies, 1, 2, 4))
// console.log(filterMoviesByIndicativeRating(movies, user))

