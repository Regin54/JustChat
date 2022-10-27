import styled, { ThemeConsumer } from "styled-components";

const EmotesButton = styled.div`
  position: relative;
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${({ isEmotesVisible, theme }) =>
    isEmotesVisible ? theme.colors.darkGray : theme.colors.lightGray};

  &&:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export default EmotesButton;
