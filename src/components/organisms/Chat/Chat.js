import Message from "../../molecules/Message/Message.js";
import { Wrapper } from "./Chat.styles";
import { db } from "../../../firebase.js";
import { useState, useEffect, useRef } from "react";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import MessageBar from "../MessageBar/MessageBar.js";

const Chat = () => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("created", "desc"), limit(30));

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    onSnapshot(messagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.created - b.created));
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Wrapper>
        {messages &&
          messages.map((message) => {
            return (
              <Message author={message.author} key={message.created} content={message.content} date={message.created} />
            );
          })}
        <div ref={messagesEndRef} />
      </Wrapper>
      <MessageBar />
    </>
  );
};

export default Chat;
