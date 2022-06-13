import { Wrapper } from "./MessageBar.styles.js";
import Input from "../../atoms/Input.js";
import SendButton from "../../atoms/SendButton.js";
import EmotesButton from "../../atoms/EmotesButton.js";
import { IconContext } from "react-icons";
import { AiOutlineSend, AiOutlineSmile } from "react-icons/ai";

const MessageBar = () => {
  return (
    <IconContext.Provider value={{ size: "65%" }}>
      <Wrapper>
        <Input placeholder="Type your message in..." />
        <EmotesButton>
          <AiOutlineSmile />
        </EmotesButton>
        <SendButton>
          <AiOutlineSend />
        </SendButton>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default MessageBar;
