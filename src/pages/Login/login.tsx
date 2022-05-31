import { Wrapper } from "./login.style";

function Login() {
    return (
    <Wrapper style={{background: "#A1A1A1"}}>
        <input name="email" type="text" />
        <input name="password" type="password"/>
    </Wrapper>
       )
}

export default Login;