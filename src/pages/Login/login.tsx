/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '../../store/user/user.selector';
import userSlice from '../../store/user/user.slice';
import {
  BgImage, Logo, Wrapper, WrapperDiv,
} from './login.style';
import { Input } from './components/Input/input.style';
import 'react-toastify/dist/ReactToastify.css';
import { Error } from '../../types/yup/yup';
import Button from '../../components/Button/button';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const userAuthenticated = useSelector(tokenSelector);

  const dispatch = useDispatch();

  const [error, setError] = useState<string>('Campos não preenchidos');

  const toastError = () => toast.error(error, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSubmit = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().min(5).max(100).email()
          .required(),
        password: yup.string().min(4).required(),
      });

      await schema.validate(data);

      setError('');

      dispatch(userSlice.actions.authentication(data));
    } catch (yupError: any) {
      let capitalizeErrorMessage = (yupError as Error).errors[0].slice(0);

      capitalizeErrorMessage = `
        ${capitalizeErrorMessage[0].toUpperCase()}
        ${capitalizeErrorMessage.slice(1)}
      `;

      setError(capitalizeErrorMessage);
      toastError();
    }
  }, [data]);

  useEffect(() => {
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignItems="center">
      <ToastContainer />
      <BgImage />
      <Grid zIndex={2} item xs={2}>
        <Logo />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <WrapperDiv>
          <Button onClick={handleSubmit}>Entrar</Button>
          <label>
            <input type="checkbox" />
            Lembrar de mim
            <span />
          </label>
        </WrapperDiv>
      </Grid>
    </Wrapper>
  );
}

export default Login;
