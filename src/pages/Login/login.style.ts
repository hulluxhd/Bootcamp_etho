import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background: #1a1a1a;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    input{
        padding: 9px;
    }
`