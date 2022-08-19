import { Wrapper, Input, LoginButton, SignUpOptions, SignInOptions } from "./SignIn.styles.js";
import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { SignUpLink } from "./SignIn.styles.js";

const SignUp = () => {
  return (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign In to your account</h2>

      <form>
        <Input name="login" placeholder="E-mail" autoComplete="off" />
        <Input type="password" name="password" placeholder="Password" />
        <LoginButton value="Login">Login</LoginButton>
      </form>
      <SignUpOptions>
        <p>Dont't have an account?</p>
        <SignUpLink to="/signup">
          <h3>Create</h3>
        </SignUpLink>
        <p className="or">OR SIGN IN WITH</p>
        <SignInOptions>
          <IconContext.Provider value={{ size: "25%" }}>
            <BsGoogle className="google" />
            <FaFacebookF className="facebook" />
          </IconContext.Provider>
        </SignInOptions>
      </SignUpOptions>
    </Wrapper>
  );
};

export default SignUp;
