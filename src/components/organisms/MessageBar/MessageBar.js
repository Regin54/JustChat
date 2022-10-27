import React, { useState } from "react";
import { Wrapper, EmojiPickerContainer } from "./MessageBar.styles.js";
import TextArea from "../../atoms/TextArea.js";
import SendButton from "../../atoms/SendButton.js";
import EmotesButton from "../../atoms/EmotesButton.js";
import { IconContext } from "react-icons";
import { AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import { db } from "../../../firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth } from "../../../firebase.js";
import EmojiPicker from "emoji-picker-react";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const [isEmotesVisible, setIsEmotesVisible] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    if (message !== "") {
      addDoc(collection(db, "messages"), {
        author: auth.currentUser.email,
        content: message,
        created: Timestamp.now(),
      });
    }
  };

  const handleEmotes = () => {
    setIsEmotesVisible(!isEmotesVisible);
  };

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject.emoji);
    setMessage((message) => setMessage(message + emojiObject.emoji));
  };

  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper>
        <TextArea placeholder="Type your message in..." onChange={handleChange} />
        <EmotesButton
          onClick={() => {
            handleEmotes();
          }}
        >
          <AiOutlineSmile />
        </EmotesButton>
        <SendButton onClick={handleSubmit}>
          <AiOutlineSend />
        </SendButton>

        {isEmotesVisible && (
          <EmojiPickerContainer>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </EmojiPickerContainer>
        )}
      </Wrapper>
    </IconContext.Provider>
  );
};

export default MessageBar;
