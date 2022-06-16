import { MessageWrapper, MessageContent, Author, TooltipText } from "./Message.styles.js";

const Message = ({ author, content, date }) => {
  return (
    <MessageWrapper author={author}>
      <TooltipText>
        {new Date(date * 1000).toString().substring(0, 10)} {new Date(date * 1000).toString().substring(15, 21)}
      </TooltipText>
      <Author author={author}>{author}</Author>
      <MessageContent>{content}</MessageContent>
    </MessageWrapper>
  );
};

export default Message;
