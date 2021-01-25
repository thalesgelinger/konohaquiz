import styled from "styled-components";

interface Props {
  avaiable: boolean
}

const Button = styled.button<Props>`
  padding: 10px;
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  outline: none;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({avaiable}) => avaiable ? 'red': 'grey'};
`;

export default Button