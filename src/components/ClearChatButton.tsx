import { Button, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { commonColors } from '../styles/styles';
import { ReactComponent as Trash } from '../images/Trash.svg';

export const ClearChatButton: React.FC<{ deleteSession: () => void }> = ({ deleteSession }) => (
  <Button
    variant="outlined"
    sx={{
      color: commonColors.purple600,
      borderRadius: 5,
      borderColor: commonColors.purple600,
      textTransform: 'none',
      padding: '.5rem 1.375rem',
      fontSize: '1rem',
      '&:hover': {
        backgroundColor: commonColors.purple100
      },
      '&:active': {
        backgroundColor: commonColors.purple200
      }
    }}
    onClick={() => deleteSession()}>
    <SvgIcon
      sx={{
        ml: '-.2rem',
        mr: '.5rem'
      }}>
      <Trash />
    </SvgIcon>
    <Typography
      sx={{
        whiteSpace: 'nowrap'
      }}>
      Clear Chat
    </Typography>
  </Button>
);
