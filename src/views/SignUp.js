import { Wrapper, Input } from "./SignIn.styles.js";
import { SignUpButton, SignInLink, SignInLinkContainer } from "./SignUp.styles.js";
import { useAuth } from "../contexts/AuthContext.js";
import { useState } from "react";
import { ErrorContainer } from "../components/atoms/ErrorContainer.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const checkIfPasswordsMatch = () => {
    if (password === confirmedPassword) {
      return true;
    } else {
      setError("Passwords do not match. Try again!");
      return false;
    }
  };

  const onSubmit = () => {
    if (checkIfPasswordsMatch() === true) {
      signUp(email, password).then((res) => {
        if (typeof res !== "string") {
          navigate("/");
        } else if (typeof res === "string" && res.includes("Error")) {
          setError("Something went wrong. Try Again!");
        }
      });
    }
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
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setConfirmedPassword(event.target.value);
          }}
        />

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
