import React from 'react';

const ChatMessage = ({ name, message, ind }) => {
  return (
    <div className="flex items-start space-x-2 my-1">
      <img
        className="h-6 mt-0.5"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${ind}`}
        alt="user"
      />
      <div className="text-sm leading-snug break-words">
        <span className="font-bold whitespace-nowrap">{name}</span>{' '}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
