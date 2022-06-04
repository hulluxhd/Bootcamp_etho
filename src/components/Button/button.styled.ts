import styled from "styled-components";

export const ButtonStyled = styled.button`
width: 100%;
padding: 9px;
border-radius: 5px;
border: 0;
margin-top: 22px;
background: ${props => props.theme.palette.core.primary};
color: ${props => props.theme.palette.typography.primary};
font-weight: 600;
cursor: pointer;
transition: filter ease-in-out 0.2s;
&:hover{
    filter: brightness(0.9);
}
`