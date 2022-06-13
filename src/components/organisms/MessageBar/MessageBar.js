import React, { useState } from "react";
import { Wrapper } from "./MessageBar.styles.js";
import Input from "../../atoms/Input.js";
import SendButton from "../../atoms/SendButton.js";
import EmotesButton from "../../atoms/EmotesButton.js";
import { IconContext } from "react-icons";
import { AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import { db } from "../../../firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const MessageBar = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      author: "Adrian Silski",
      content: message,
      created: Timestamp.now(),
    });
  };

  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper>
        <Input placeholder="Type your message in..." onChange={handleChange} />
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
