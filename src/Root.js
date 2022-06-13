import { Wrapper } from "./Root.styles.js";
import Chat from "./components/organisms/Chat/Chat.js";
import MessageBar from "./components/organisms/MessageBar/MessageBar.js";

function Root() {
  return (
    <Wrapper>
      <Chat />
      <MessageBar />
    </Wrapper>
  );
}

export default Root;
