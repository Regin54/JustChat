import styled from "styled-components";

const SendButton = styled.div`
  position: relative;
  height: 100%;
  width: 10%;
  background-color: #00adb5;
  border-radius: 0 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &&:hover {
    background-color: #006b70;
  }
`;

export default SendButton;
