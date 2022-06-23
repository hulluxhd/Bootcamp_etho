import { Store } from '../store/store.type';

export const tokenSelector = (state: Store) => state.user.data.token;
