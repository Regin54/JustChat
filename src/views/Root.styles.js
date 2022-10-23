import styled from "styled-components";
import blob from "../assets/img/blob.svg";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
  background-image: url(${blob});
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 480px) {
    background-image: none;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
