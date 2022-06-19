import React, { useState } from "react";
import { Wrapper } from "./MessageBar.styles.js";
import TextArea from "../../atoms/TextArea.js";
import SendButton from "../../atoms/SendButton.js";
import EmotesButton from "../../atoms/EmotesButton.js";
import { IconContext } from "react-icons";
import { AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import { db } from "../../../firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth } from "../../../firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setAuthor(res.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      addDoc(collection(db, "messages"), {
        author: author,
        content: message,
        created: Timestamp.now(),
      });
    }
  };

  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper>
        <TextArea placeholder="Type your message in..." onChange={handleChange} />
        <EmotesButton onClick={signInWithGoogle}>
          <AiOutlineSmile />
        </EmotesButton>
        <SendButton onClick={handleSubmit}>
          <AiOutlineSend />
        </SendButton>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default MessageBar;
