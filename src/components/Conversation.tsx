import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { IChat } from '../types/IChat';
import { Chat } from './Chat';

const LastMessage: React.FC = () => {
  const lastMessageRef: React.MutableRefObject<any> = useRef();
  useEffect(() => lastMessageRef.current?.scrollIntoView());
  return <div ref={lastMessageRef} />;
};

export const Conversation: React.FC<{
  conversation: Array<IChat>;
  loading: boolean;
}> = ({ conversation, loading }) => (
  <Grid item>
    {conversation.map((chat: IChat) => (
      <Chat key={chat.question} chat={chat} loading={loading} />
    ))}
    <LastMessage />
  </Grid>
);
