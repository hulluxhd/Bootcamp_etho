import axiosInstance from '../../modules/axios/axios';
import { AuthPayload } from './user.type';

export default function userService() {
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);

  return {
    auth,
  };
}
