import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dirtyWhite};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  position: absolute;
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 3px ${({ theme }) => theme.colors.black};

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Logo = styled.h1`
  position: absolute;
  top: 7%;
  left: 35%;
  opacity: 0.8;
`;

const Login = () => {
  return (
    <Wrapper>
      <Logo>JustChat</Logo>
      <Container></Container>
    </Wrapper>
  );
};

export default Login;
