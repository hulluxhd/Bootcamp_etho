import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { BgImage, Logo, Text, Wrapper } from "./login.style";
import { Input } from "./components/Input/input.style";
import * as yup from "yup";
import Button from "../../components/Button/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const toastError = () => toast.error(error, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark'
    });

  const [error, setError] = useState<string>("Campos não preenchidos");

  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSubmit = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().min(5).max(100).email().required(),
        password: yup.string().min(4).required(),
      });

      await schema.validate(data);
      setError("");
      
    } catch (e: any) {
      let capitalizeErrorMessage = e.errors[0].slice(0);
      capitalizeErrorMessage = `${capitalizeErrorMessage[0].toUpperCase()}${capitalizeErrorMessage.slice(1)}`
      setError(capitalizeErrorMessage);
      toastError()
    }
  }, [data]);

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
        <Button onClick={handleSubmit}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}

export default Login;
