import styled from 'styled-components';

type InputTextProps = {
  valid?: boolean;
};

const InputContainer = styled.div`
`;

const Input = styled.input<InputTextProps>`
  color: white;
  width: 100%;
  font-size: 1rem;
  border-color: ${({ valid }) => (valid ? "white" : "red")};
  background: none;
  border-radius: .3rem;

  height: 2rem;
  min-width: 95px;
`;

const HelpText = styled.p<InputTextProps>`
  color: ${({ valid }) => (valid ? "white" : "red")};
`;


export { Input, InputContainer, HelpText };