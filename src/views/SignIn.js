import { useState } from "react";
import { Wrapper, Input, LoginButton, SignUpOptions, SignInOptions } from "./SignIn.styles.js";
import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { SignUpLink } from "./SignIn.styles.js";
import { useAuth } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { ErrorContainer } from "../components/atoms/ErrorContainer.js";
import { LoadingIcon } from "../components/atoms/LoadingIcon.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleResponse = (response) => {
    if (typeof response !== "string") {
      navigate("/");
    } else if (typeof response === "string") {
      setError("Something went wrong. Try Again!");
    }
  };

  const onSubmit = () => {
    setIsPending(true);
    signIn(email, password)
      .then((res) => {
        handleResponse(res);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const signInWithOtherPlatform = () => {
    setIsPending(true);
    signInWithGoogle()
      .then((res) => {
        handleResponse(res);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return isPending ? (
    <LoadingIcon />
  ) : (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign In to your account</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <form>
        <Input
          name="email"
          placeholder="E-mail"
          autoComplete="off"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <LoginButton
          value="Login"
          onClick={() => {
            onSubmit();
          }}
        >
          Login
        </LoginButton>
      </form>
      <SignUpOptions>
        <p>Don't have an account?</p>
        <SignUpLink to="/signup">
          <h3>Create</h3>
        </SignUpLink>
        <p className="or">OR SIGN IN WITH</p>
        <SignInOptions>
          <IconContext.Provider value={{ size: "25%" }}>
            <BsGoogle
              className="google"
              onClick={(e) => {
                signInWithOtherPlatform();
              }}
            />
          </IconContext.Provider>
        </SignInOptions>
      </SignUpOptions>
    </Wrapper>
  );
};

export default SignIn;
