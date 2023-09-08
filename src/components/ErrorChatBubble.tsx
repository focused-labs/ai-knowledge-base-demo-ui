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
      border: `1px solid ${commonColors.error}`,
      borderRadius: '0px 16px 16px 16px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }}>
    <Grid item container xs={12}>
      <ErrorIcon></ErrorIcon>
      <Typography
        sx={{
          color: commonColors.errorText,
          paddingLeft: '.5rem'
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
