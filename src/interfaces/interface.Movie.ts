import { IndicativeRating } from "../enum/enum.IndicativeRating";

export interface Movie {
    id: number,
    name: string,
    indicativeRating: IndicativeRating,
    ratings: number[],
}