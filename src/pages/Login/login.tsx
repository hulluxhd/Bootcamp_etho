import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Button, Error, Input, Wrapper } from "./login.style";
import * as yup from "yup"

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<string>('')

    const handleChange = useCallback(
        ({target}: any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value 
            }))
        }, [setData])
    
    const handleSubmit = useCallback(async () => {
        
        try {
            const schema = yup.object().shape({
                email: yup.string().email().min(5).max(100).required(),
                password: yup.string().required()
            })
            
           await schema.validate(data)
            console.log("passow")
            setErrors('')

        } 
        catch (e: any) {
            setErrors(e.errors[0])
            console.log(errors)
        }

    }, [data])

    

    return (
    <Wrapper container justifyContent="center" alignItems="center">
      <Grid container xs={3} gap="14px">
        <Input name="email" type="text" placeholder="E-mail" onChange={handleChange}/>
        <Input name="password" type="password" placeholder="Senha" onChange={handleChange}/>
        <Button onClick={handleSubmit}>Entrar</Button>
            {errors && <Error>{ errors}</Error>}
      </Grid>
    </Wrapper>
  );
}

export default Login;
