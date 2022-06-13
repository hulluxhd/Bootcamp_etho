import { Movie } from "./interface.Movie";

export interface User {
    id:number,
    name: string,
    age: number,
    myList?: Movie[]
}