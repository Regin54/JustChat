import { useEffect, useState } from "react";
import { Wrapper, Input, LoginButton, SignUpOptions, SignInOptions } from "./SignIn.styles.js";
import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { SignUpLink } from "./SignIn.styles.js";
import { useAuth } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { ErrorContainer } from "../components/atoms/ErrorContainer.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const onSubmit = () => {
    signIn(email, password).then((res) => {
      console.log(res);
      if (typeof res !== "string") {
        navigate("/");
      } else if (typeof res === "string") {
        setError("Something went wrong. Try Again!");
      }
    });
  };

  useEffect(() => {
    if (currentUser != null) {
      logOut();
    }
  }, []);

  return (
    <Wrapper>
      <h1>Hello!</h1>
      <h2>Sign In to your account</h2>

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
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <LoginButton value="Login" onClick={onSubmit}>
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
            <BsGoogle className="google" />
            <FaFacebookF className="facebook" />
          </IconContext.Provider>
        </SignInOptions>
      </SignUpOptions>
    </Wrapper>
  );
};

export default SignIn;
