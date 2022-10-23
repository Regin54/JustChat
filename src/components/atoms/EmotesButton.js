import styled, { ThemeConsumer } from "styled-components";

const EmotesButton = styled.div`
  position: relative;
  height: 100%;
  width: 10%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &&:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export default EmotesButton;
