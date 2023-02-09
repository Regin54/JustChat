import { Wrapper, Input } from "./SignIn.styles.js";
import { SignUpButton, SignInLink, SignInLinkContainer } from "./SignUp.styles.js";
import { useAuth } from "../contexts/AuthContext.js";
import { useState } from "react";
import { ErrorContainer } from "../components/atoms/ErrorContainer.js";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../components/atoms/LoadingIcon.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [displayName, setDisplayName] = useState(null);

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

  const handleErrors = (response) => {
    if (typeof res !== "string") {
      navigate("/");
    } else if (response.includes("auth/email-already-in-use")) {
      setError("E-mail already in use. Try again!");
    } else if (typeof res === "string" && response.includes("Error")) {
      console.log(response);
      setError("Something went wrong. Try again!");
    }
  };

  const handleSubmit = () => {
    if (checkIfPasswordsMatch() === true) {
      if (email.includes("@")) {
        setIsPending(true);
        signUp(email, password, displayName)
          .then((res) => {
            handleErrors(res);
          })
          .finally(() => {
            setIsPending(false);
          });
      } else {
        setError("Invalid E-mail. Try again!");
      }
    }
  };

  return isPending ? (
    <LoadingIcon />
  ) : (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign Up to JustChat</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <form>
        <Input
          name="email"
          placeholder="E-mail"
          autoComplete="off"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          name="nickname"
          placeholder="Display Name"
          autoComplete="off"
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
            handleSubmit();
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
