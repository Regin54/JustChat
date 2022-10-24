import styled from "styled-components";

export const LogoutButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 5%;
  height: 10%;
  right: 1%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &&:hover {
    transform: translateX(-5px);
  }
`;
