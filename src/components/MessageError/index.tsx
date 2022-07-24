import React from 'react';

type MessageErrorProps = {
  text?: string;
};

const MessageError: React.FC<MessageErrorProps> = ({ text }) => {
  return text ? <p className="m-0 text-danger">{text}</p> : <></>;
};

export default MessageError;
