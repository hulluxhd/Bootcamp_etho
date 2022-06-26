import { useSelector } from 'react-redux';
import { List } from '../../store/shows/shows.type';
import { tokenSelector } from '../../store/user/user.selector';
import axiosInstance from '../../modules/axios/axios';
import { Props } from './shows.type';

export const showsService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getList = () => axiosInstance.get('/shows', config);

  const getMyList = () => axiosInstance.get('/list', config);

  return {
    getList,
    getMyList,
  };
};
