import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { IChat } from '../types/IChat';
import { Chat } from './Chat';

export const Conversation: React.FC<{
  conversation: Array<IChat>;
}> = ({ conversation }) => {
  const LastMessage = () => {
    const lastMessageRef: React.MutableRefObject<any> = useRef();
    useEffect(() => lastMessageRef.current.scrollIntoView());
    return <div ref={lastMessageRef} />;
  };

  return (
    <Grid item>
      {conversation.map((chat: IChat) => (
        <Chat key={chat.question} chat={chat} />
      ))}
      <LastMessage />
    </Grid>
  );
};
