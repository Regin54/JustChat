import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 30%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.cyan};
  box-shadow: 8px 8px 8px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  @media (max-width: 480px) {
    width: 90%;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 0;
    margin-top: 25px;
    letter-spacing: 1px;
  }

  h2 {
    margin: 0;
    font-size: 15px;
  }

  form {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    width: 100%;
  }

  p {
    position: relative;
    top: 12%;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  position: relative;
  height: 40px;
  width: 70%;
  color: black;
  font-size: 22px;
  border-radius: 22px;
  border: none;
  top: 3%;
  margin-top: 40px;
  box-shadow: 4px 4px 6px ${({ theme }) => theme.colors.gray};
  padding: 3px 12px 3px 12px;

  &&:focus {
    outline: none;
  }
`;

export const LoginButton = styled.div`
  position: relative;
  background-color: #66b8bd;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  height: 15%;
  width: 30%;
  padding: 15px;
  font-size: 28px;
  border-radius: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};

  &&:hover {
    box-shadow: 4px 6px 6px ${({ theme }) => theme.colors.gray};
    transform: translateX(-2%) translateY(-2%);
  }
`;

export const SignUpLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const SignUpOptions = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 10%;

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

  .or {
    position: relative;
    margin: 0;
    padding: 0;
    top: -15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .or::before {
    content: "";
    position: absolute;
    background-color: white;
    width: 320%;
    height: 3px;
    bottom: -35%;

    @media (max-width: 480px) {
      width: 230%;
    }
  }
`;

export const SignInOptions = styled.div`
  position: absolute;
  width: 100%;
  bottom: -50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .facebook {
    position: relative;
    width: 14%;
    color: ${({ theme }) => theme.colors.facebookBlue};
    border: 5px solid ${({ theme }) => theme.colors.facebookBlue};
    border-radius: 50%;
    padding: 5px 12px 5px 12px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .google {
    position: relative;
    width: 18%;
    color: ${({ theme }) => theme.colors.googleRed};
    border: 5px solid ${({ theme }) => theme.colors.googleRed};
    border-radius: 50%;
    padding: 10px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .google:hover,
  .facebook:hover {
    background-color: ${({ theme }) => theme.colors.dirtyWhite};
  }
`;
