import Message from "../../molecules/Message/Message.js";
import { Wrapper } from "./Chat.styles";
import { db } from "../../../firebase.js";
import { useState, useEffect, useRef } from "react";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import MessageBar from "../MessageBar/MessageBar.js";
import { useAuth } from "../../../contexts/AuthContext.js";
import { BiLogOut } from "react-icons/bi";
import { IconContext } from "react-icons";
import { LogoutButton } from "../../atoms/LogoutButton.js";

const Chat = () => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("created", "desc"), limit(30));

  const { logOut } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    onSnapshot(messagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.created - b.created));
    });
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Wrapper>
        <LogoutButton
          onClick={() => {
            logOut();
          }}
        >
          <IconContext.Provider value={{ size: "75%" }}>
            <BiLogOut />
          </IconContext.Provider>
        </LogoutButton>
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
