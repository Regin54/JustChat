import { MessageWrapper, MessageContent, Author } from "./Message.styles.js";

const Message = ({ author }) => {
  return (
    <MessageWrapper author={author}>
      <Author author={author}>Adrian Silski</Author>
      <MessageContent>Siemano, co tam u ciebie slychac?</MessageContent>
    </MessageWrapper>
  );
};

export default Message;
