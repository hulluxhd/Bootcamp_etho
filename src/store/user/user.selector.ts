import { Store } from '../store/store.type';

export const authenticated = (state: Store) => !!state.user.data.email;
