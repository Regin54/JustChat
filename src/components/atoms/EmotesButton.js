import styled from "styled-components";

const EmotesButton = styled.div`
  position: relative;
  height: 100%;
  width: 10%;
  background-color: #393e46;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &&:hover {
    background-color: #4f555e;
  }
`;

export default EmotesButton;
