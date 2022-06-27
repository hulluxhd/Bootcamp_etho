import { Show } from '../../store/shows/shows.type';

export const SHOWS_LIST_URL = '/shows';

export type Props = {
    title: string,
    shows: Show[]
}
