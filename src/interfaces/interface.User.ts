import { Movie } from "./interface.Movie";

export interface User {
    name: string,
    age: number,
    myList?: Movie[]
}