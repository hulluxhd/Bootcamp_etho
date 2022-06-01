import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background: #1a1a1a;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
`

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #E31A13;
    margin-top: 10px;
    background: #E31A13;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    transition: filter ease-in-out 0.2s;
    &:hover{
        filter: brightness(0.9);
    }
`

export const Error = styled.p`
    font-weight: 600;
    color: #E31A13;
`