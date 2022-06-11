
enum IndicativeRating {
    AL = 0,
    A10 = 10,
    A12 = 12,
    A14 = 14,
    A16 = 16,
    A18 = 18,
}

interface Movie {
    id: number,
    name: string,
    indicativeRating: IndicativeRating,
    ratings: number[],
}

type MovieWithAverage = Movie & { average: number };

interface User {
    name: string,
    age: number,
    myList?: Movie[]
}

const user: User = {
    name: "Denny",
    age: 9
}

// Math.ceil(Math.random() * 100)
const movies: Movie[] =
    [
        { id: 1, name: 'Avengers', indicativeRating: IndicativeRating.AL, ratings: [1, 3, 4] },
        { id: 2, name: 'LOTR', indicativeRating: IndicativeRating.A10, ratings: [5, 5, 5] },
        { id: 3, name: 'Dead Space', indicativeRating: IndicativeRating.A18, ratings: [] },
        { id: 4, name: 'Not', indicativeRating: IndicativeRating.A12, ratings: [1, 1, 1] }
    ]


/* Funções para aplicar a lógica dos filmes (filtrar, obter média das avaliações, retornar filmes ordenados pela média*/

function removeEmptyRatings(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.ratings.length)
}

function addAverageToMoviesArray(movies: Movie[]): MovieWithAverage[] {
    const moviesWithAverage = movies.map(movie => {
        let average = movie.ratings.reduce((p, c) => {
            return (p + c)
        }, 0)

        average = average / movie.ratings.length
        return {
            ...movie,
            average
        }
    })
    return moviesWithAverage
}

function sortingByAverage(movies: MovieWithAverage[]): MovieWithAverage[] {
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

function orderByRating(movies: Movie[]): MovieWithAverage[] {
    const filtered = removeEmptyRatings(movies)
    const moviesWithAverage = addAverageToMoviesArray(filtered)
    const orderedMovies = sortingByAverage(moviesWithAverage)

    return orderedMovies
}

/* Função de filtro do usuário, baseado em sua idade */

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
    return movies.filter((movie) => movie.indicativeRating < user.age)
}

/* Função de adicionar filmes à uma lista de usuário */

function addMovieToUserList(movie: Movie, user: User): void {
    if (user.myList) {
        user.myList = [
            ...user.myList,
            movie
        ]
    } else user.myList = [movie]
}

function addManyMoviesWithId(user: User, ...ids: number[]) {
    ids.forEach(id => {
        const movieFound = movies.find((movie) => movie.id === id )
        if (movieFound) {
            addMovieToUserList(movieFound, user)
        }
    })
}

addManyMoviesWithId(user, 1, 2, 4)

console.log(user)

// console.log(filterMoviesByIndicativeRating(movies, user))

