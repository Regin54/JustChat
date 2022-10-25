import { MessageWrapper, MessageContent, Author, TooltipText, MessageTime } from "./Message.styles.js";

const Message = ({ author, content, date }) => {
  return (
    <MessageWrapper author={author}>
      <Author author={author}>{author}</Author>
      <TooltipText author={author}>
        <MessageTime>
          {new Date(date * 1000).toString().substring(4, 10)} {new Date(date * 1000).toString().substring(15, 21)}
        </MessageTime>
      </TooltipText>
      <MessageContent>{content}</MessageContent>
    </MessageWrapper>
  );
};

export default Message;
