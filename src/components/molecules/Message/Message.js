import { MessageWrapper, MessageContent, Author, MessageTime } from "./Message.styles.js";

const Message = ({ author, content, time }) => {
  return (
    <MessageWrapper author={author}>
      <MessageTime>{new Date(time * 1000).toString().substring(15, 21)}</MessageTime>
      <Author author={author}>{author}</Author>
      <MessageContent>{content}</MessageContent>
    </MessageWrapper>
  );
};

export default Message;
