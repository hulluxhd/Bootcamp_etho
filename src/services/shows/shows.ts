import { useSelector } from 'react-redux';
import { List } from 'store/shows/shows.type';
import { tokenSelector } from '../../store/user/user.selector';
import axiosInstance from '../../modules/axios/axios';

export const showsService = () => {
  const token = useSelector(tokenSelector);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getList = () => axiosInstance.get<List>('/shows', { headers });

  return {
    getList,
  };
};
