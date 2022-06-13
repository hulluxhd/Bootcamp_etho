import { IndicativeRating } from "../enum/enum.IndicativeRating";

export interface Movie {
    id: number,
    name: string,
    ratings: number[],
    directedBy: string,
    duration: number
}