import Message from "../../molecules/Message/Message.js";
import { Wrapper } from "./Chat.styles";
import { db } from "../../../firebase.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data() })).sort((a, b) => a.created.seconds - b.created.seconds));
    };

    getMessages();
  }, []);

  return (
    <Wrapper>
      {messages.map((message) => {
        return (
          <Message author={"you"} key={message.created} content={message.content} time={message.created.seconds} />
        );
      })}
    </Wrapper>
  );
};

export default Chat;
