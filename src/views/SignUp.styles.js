import { LoginButton, SignUpLink } from "./SignIn.styles";
import styled from "styled-components";

export const SignUpButton = styled(LoginButton)`
  top: 14%;
`;

export const SignInLink = styled(SignUpLink)`
  position: relative;
  color: inherit;
  text-decoration: none;

  h3 {
    top: -10%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s ease-in-out;
    font-size: 22px;
  }

  h3::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: -5%;
    overflow: hidden;
    transform: translateX(-200%);
    transition: all 0.2s ease-in-out;
  }

  h3:hover::after {
    transform: translateX(-100%);
    overflow: hidden;
  }

  h3:hover {
    opacity: 1;
  }
`;

export const SignInLinkContainer = styled.div`
  top: 18%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
