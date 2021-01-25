import styled from "styled-components";

const InputTextWrapper = styled.input`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  padding: 10px;
  outline: none;
  color: #ffffff;
`;

interface InputTextProps extends HTMLInputElement {
  setText: any;
}

function InputText({ setText, type, placeholder, value }: InputTextProps) {
  return (
    <InputTextWrapper
      onChange={(e) => setText(e.target.value)}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default InputText;
