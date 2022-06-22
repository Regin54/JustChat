import { Wrapper, Input } from "./SignIn.styles.js";
import { SignUpButton } from "./SignUp.styles.js";

const SignUp = () => {
  return (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign In to your account</h2>

      <form>
        <Input name="login" placeholder="E-mail" autoComplete="off" />
        <Input type="text" name="nickname" placeholder="Nickname" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" name="password" placeholder="Password" />
        <SignUpButton value="Login">Sign Up</SignUpButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;
