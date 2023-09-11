import { Button, styled } from '@mui/material';
import { commonColors } from './styles';

export const StyledButton = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'left',
  textTransform: 'none',
  cursor: 'pointer',
  color: commonColors.purple600,
  border: `1px solid ${commonColors.purple600}`,
  borderRadius: '1.5rem',
  padding: '.5rem 0.75rem',
  margin: '.5rem 0',
  '&:hover': {
    backgroundColor: commonColors.purple200
  },
  '&:active': {
    backgroundColor: commonColors.purple300
  }
}));
