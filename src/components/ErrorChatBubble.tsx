import React from 'react';
import { Grid, Typography } from '@mui/material';
import { commonColors } from '../styles/styles';
import { ErrorIcon } from './ErrorIcon';

export const ErrorChatBubble: React.FC = () => (
  <Grid
    container
    sx={{
      p: 1,
      pl: 2,
      pr: 2,
      borderRadius: '0px 16px 16px 16px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: commonColors.error
    }}>
    <Grid item container xs={12}>
      <ErrorIcon></ErrorIcon>
      <Typography
        sx={{
          color: commonColors.errorText,
          paddingLeft: '.5rem',
          fontWeight: 'bold'
        }}>
        Error
      </Typography>
    </Grid>
    <Grid item>
      <Typography sx={{ color: commonColors.errorText, paddingLeft: '2rem' }}>
        Something went wrong. Please refresh the page and try again.
      </Typography>
    </Grid>
  </Grid>
);
