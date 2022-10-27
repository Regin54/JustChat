import React, { useState, useRef } from "react";
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

  const inputRef = useRef();
  const formRef = useRef();
  const sendButtonRef = useRef();

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

    setMessage("");
    inputRef.current.value = "";
  };

  const handleEmotes = () => {
    setIsEmotesVisible(!isEmotesVisible);
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((message) => setMessage(message + emojiObject.emoji));
    inputRef.current.value += emojiObject.emoji;
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendButtonRef.current.click();
    }
  };

  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper onSubmit={handleSubmit} ref={formRef}>
        <TextArea
          placeholder="Type your message in..."
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={onEnterPress}
        />
        <EmotesButton
          onClick={() => {
            handleEmotes();
          }}
          isEmotesVisible={isEmotesVisible}
        >
          <AiOutlineSmile />
        </EmotesButton>
        <SendButton onClick={handleSubmit} ref={sendButtonRef}>
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
