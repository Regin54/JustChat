import styled from "styled-components";

export const MessageWrapper = styled.span`
  position: relative;
  max-width: 65%;
  min-width: 20%;
  height: min-content;
  border-radius: 50px;
  background-color: ${({ author }) => (author === "you" && "#00ADB5") || (author !== "you" && "#666E7A")};
  color: white;
  align-self: ${({ author }) => (author === "you" && "flex-end") || (author !== "you" && "flex-start")};
  left: ${({ author }) => (author === "you" && "-10%") || (author !== "you" && "10%")};
  margin: 2% 0 0 0;
  &&:nth-child(1) {
    margin: 0;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

export const MessageContent = styled.p`
  position: relative;
  padding: 0 5% 0 5%;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 50px;
  font-size: 24px;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Author = styled.h2`
  position: relative;
  margin: 7%;
  text-align: ${({ author }) => (author === "you" && "right") || (author === "else" && "left")};
  opacity: 0.7;
  margin-top: 2%;
  margin-bottom: 0;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const MessageTime = styled.h3`
  position: absolute;
  left: 7%;
  opacity: 0.7;
`;
