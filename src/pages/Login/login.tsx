import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { BgImage, Logo, Text, Wrapper } from "./login.style";
import { Input } from "./components/Input/input.style";
import * as yup from "yup";
import Button from "../../components/Button/button";
import FormError from "../../components/Form-Error/form-error";
import { toast } from "react-toastify";


function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

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
        email: yup.string().email().min(5).max(100).required(),
        password: yup.string().min(6).required(),
      });

      await schema.validate(data);
      setError("");
    } catch (e: any) {
      setError(e.errors[0]);
      console.log(error);
    }
  }, [data]);

  return (
    <Wrapper container justifyContent="center" alignItems="center">
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
