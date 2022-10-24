import { Wrapper, Input } from "./SignIn.styles.js";
import { SignUpButton, SignInLink, SignInLinkContainer } from "./SignUp.styles.js";
import { useAuth } from "../contexts/AuthContext.js";
import { useState } from "react";
import { ErrorContainer } from "../components/atoms/ErrorContainer.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useAuth();

  const onSubmit = () => {
    signUp(email, password, displayName).then((res) => {
      if (res.includes("Error")) {
        setError("Something went wrong. Try again!");
      }
    });
  };

  return (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign Up to JustChat</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <form>
        <Input
          name="login"
          placeholder="E-mail"
          autoComplete="off"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          type="text"
          name="nickname"
          placeholder="Nickname"
          onChange={(event) => {
            setDisplayName(event.target.value);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Input type="password" name="password" placeholder="Confirm Password" />

        <SignUpButton
          onClick={() => {
            onSubmit();
          }}
        >
          Sign Up
        </SignUpButton>

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
