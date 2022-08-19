import { Wrapper, Input } from "./SignIn.styles.js";
import { SignUpButton, SignInLink, SignInLinkContainer } from "./SignUp.styles.js";

const SignUp = () => {
  return (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign Up to JustChat</h2>

      <form>
        <Input name="login" placeholder="E-mail" autoComplete="off" />
        <Input type="text" name="nickname" placeholder="Nickname" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" name="password" placeholder="Password" />

        <SignUpButton>Sign Up</SignUpButton>

        <SignInLinkContainer>
          Already have an account?
          <SignInLink to="/login">
            <h3>Sign in</h3>
          </SignInLink>
        </SignInLinkContainer>
      </form>
    </Wrapper>
  );
};

export default SignUp;
