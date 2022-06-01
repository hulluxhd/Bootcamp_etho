import { useCallback, useEffect, useState } from "react";
import { Wrapper } from "./login.style";

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = useCallback(
        ({target}: any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value 
            }))
        }, [setData])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
    <Wrapper container justifyContent="center" alignItems="center">
      <div>
        <input name="email" type="text" onChange={handleChange}/>
        <input name="password" type="password" onChange={handleChange}/>
      </div>
    </Wrapper>
  );
}

export default Login;
