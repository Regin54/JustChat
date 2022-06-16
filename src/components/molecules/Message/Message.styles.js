import styled from "styled-components";

export const TooltipText = styled.span`
  display: none;
  width: 120px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  left: 25px;
  z-index: 1;
`;

export const MessageWrapper = styled.span`
  position: relative;
  max-width: 65%;
  min-width: 20%;
  height: min-content;
  border-radius: 45px;
  color: white;
  margin: 2% 0 0 0;
  background-color: ${({ author, theme }) =>
    (author === "you" && theme.colors.cyan) || (author !== "you" && theme.colors.lightGrey)};
  align-self: ${({ author }) => (author === "you" && "flex-end") || (author !== "you" && "flex-start")};
  left: ${({ author }) => (author === "you" && "-10%") || (author !== "you" && "10%")};

  &&:nth-child(1) {
    margin: 0;
  }

  &&:hover ${TooltipText} {
    display: block;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

export const MessageContent = styled.p`
  position: relative;
  padding: 0 25px 0 25px;
  border-radius: 50px;
  font-size: 24px;
  word-wrap: break-word;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Author = styled.h2`
  position: relative;
  text-align: ${({ author }) => (author === "you" && "right") || (author === "else" && "left")};
  opacity: 0.7;
  margin-top: 2%;
  margin-bottom: 0;
  right: 60px;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const MessageTime = styled.h3`
  position: absolute;
  left: 7%;
  opacity: 0.7;
`;
