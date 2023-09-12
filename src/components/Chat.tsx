import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Box } from '@mui/material';
import { IChat } from '../types/IChat';
import LoadingGif from '../images/loading-non-fuzzy.gif';
import { Sources } from './Sources';
import { commonColors } from '../styles/styles';
import { ErrorChatBubble } from './ErrorChatBubble';

export const Chat: React.FC<{
  chat: IChat;
  loading: boolean;
}> = ({ chat, loading }) => {
  const screenIsWide = useMediaQuery('(min-width:1100px)');

  const maxWidth = () => {
    if (screenIsWide) {
      return '50%';
    }
    return `calc(100% - 30px)`;
  };

  const renderLoadingOrErrorOrResponse = () => {
    if (loading && !chat.answer) {
      return (
        <>
          <Grid container item justifyContent="center">
            <Box
              component="img"
              sx={{
                backgroundColor: commonColors.purple50,
                width: '4.375rem',
                justifyContent: 'center',
                mt: '2rem'
              }}
              alt="Waiting for response ..."
              src={LoadingGif}
            />
          </Grid>
          <Grid container item justifyContent="center">
            <Typography
              sx={{
                mb: '1rem',
                color: commonColors.purple600
              }}>
              Creating magical results ... <br />
              this might take a minute!
            </Typography>
          </Grid>
        </>
      );
    }
    if (chat.isError) {
      return <ErrorChatBubble />;
    }
    return (
      <Grid container item>
        <Typography whiteSpace="pre-line">{chat.answer}</Typography>
        <Sources chat={chat}></Sources>
      </Grid>
    );
  };

  return (
    <Grid container direction="column" justifyContent="between">
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-end"
        sx={{
          mb: 1
        }}>
        <Grid item>
          <Typography
            sx={{
              justifyContent: 'flex-end',
              p: 1,
              pl: 2,
              pr: 2,
              backgroundColor: commonColors.purple600,
              color: commonColors.white,
              borderRadius: '16px 0px 16px 16px'
            }}>
            {chat.question}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        sx={{
          mb: 1
        }}>
        <Grid
          container
          item
          justifyContent="center"
          xs={6}
          sx={{
            p: 2,
            borderRadius: '0px 16px 16px 16px',
            backgroundColor: chat.isError ? '#FDEDED' : commonColors.purple50,
            maxWidth
          }}>
          {renderLoadingOrErrorOrResponse()}
        </Grid>
      </Grid>
    </Grid>
  );
};
