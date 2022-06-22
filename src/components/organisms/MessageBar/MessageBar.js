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

const MessageBar = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      addDoc(collection(db, "messages"), {
        author: auth.currentUser.displayName,
        content: message,
        created: Timestamp.now(),
      });
    }
  };

  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper>
        <TextArea placeholder="Type your message in..." onChange={handleChange} />
        <EmotesButton>
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
