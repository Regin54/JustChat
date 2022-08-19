import { Wrapper } from "./Root.styles.js";
import Chat from "../components/organisms/Chat/Chat.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import PrivateRoute from "../components/organisms/PrivateRoute/PrivateRoute.js";

function Root() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default Root;
