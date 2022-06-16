import styled from "styled-components";

const Input = styled.textarea`
  position: relative;
  width: 80%;
  height: 85%;
  border: none;
  font-size: 28px;
  background: ${({ theme }) => theme.colors.dirtyWhite};
  padding: 0.5%;
  resize: none;
  border-radius: 15px 0 0 0;
  margin: 0;

  &&:focus {
    outline: none;
  }
`;

export default Input;