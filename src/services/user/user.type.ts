import { AxiosResponse } from 'axios';

export type AuthPayload = {
  email: string;
  password: string;
};

export type AuthResponse = AxiosResponse<{
  token: string;
}>;

// eslint-disable-next-line no-shadow
export enum AuthErrorMessage {
  UNREACHABLE_AUTHENTICATION = 'An error ocurred on authentication',
}
