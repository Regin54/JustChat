import styled from "styled-components";
import { auth } from "../../../firebase.js";

export const TooltipText = styled.span`
  display: none;
  width: 200px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  height: 100%;
  border-radius: 6px;
  position: absolute;
  right: ${({ author }) => (author === auth.currentUser.email && "-45%") || (author !== "you" && "100%")};
  z-index: 1;

  @media (max-width: 480px) {
    display: inline;
    right: 0;
    top: -13px;
    font-size: 14px;
  }
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
    (author === auth.currentUser.email && theme.colors.darkCyan) || (author !== "you" && theme.colors.lightGray)};
  align-self: ${({ author }) =>
    (author === auth.currentUser.email && "flex-end") || (author !== "you" && "flex-start")};
  left: ${({ author }) => (author === auth.currentUser.email && "-10%") || (author !== "you" && "10%")};

  &&:nth-child(1) {
    margin: 0;
  }

  &&:hover ${TooltipText} {
    display: inline;
    text-align: center;

    @media (max-width: 480px) {
      display: inline;
    }
  }

  @media (max-width: 480px) {
    min-width: 78%;
    max-width: 90%;
    left: 5%;
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
  display: ${({ author }) => (author === auth.currentUser.email && "none") || (author !== "you" && "inline")};
  position: relative;
  opacity: 0.7;
  left: 25px;
  top: 5%;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const MessageTime = styled.h3`
  position: relative;
  margin: 0;
  padding: 0;
  left: 7%;
  opacity: 0.7;
`;
