import { Wrapper } from "./Root.styles.js";
import Chat from "../components/organisms/Chat/Chat.js";
import Login from "../components/organisms/Login/Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Root() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" exact element={<Chat />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default Root;
