import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 22px;
  border: ${(props) => {
    const {
      theme: { layout, palette },
    } = props;
    return css`
      ${layout.border.small} solid ${palette.border.default}
    `;
  }};
  border-radius: ${(props) => props.theme.layout.border.medium};
`;