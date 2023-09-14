import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { ReactComponent as EnterButtonHover } from '../images/EnterHover.svg';
import { ReactComponent as EnterButtonDefault } from '../images/EnterDefault.svg';
import { ReactComponent as EnterButtonDisabled } from '../images/EnterDisabled.svg';
import { ReactComponent as EnterButtonPressed } from '../images/EnterPressed.svg';
import { commonColors } from '../styles/styles';

enum EnterButtonState {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  PRESSED = 'PRESSED',
  HOVERED = 'HOVERED'
}

export const QueryForm: React.FC<{
  inputQuery: string;
  onInputQueryChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}> = ({ inputQuery, onInputQueryChange, onSubmit, loading }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [enterButtonStatus, setEnterButtonStatus] = useState<EnterButtonState>(
    EnterButtonState.DISABLED
  );
  const [previousEnterButtonStatus, setPreviousEnterButtonStatus] = useState<EnterButtonState>(
    EnterButtonState.DISABLED
  );

  const onFormSubmit = () => {
    if (inputQuery && !loading) {
      onSubmit();
      setEnterButtonStatus(EnterButtonState.DISABLED);
    }
  };

  const retrieveEnterButton = () => {
    switch (enterButtonStatus) {
      case EnterButtonState.DISABLED:
        return <EnterButtonDisabled />;
      case EnterButtonState.PRESSED:
        return <EnterButtonPressed />;
      case EnterButtonState.HOVERED:
        return <EnterButtonHover />;
      case EnterButtonState.ACTIVE:
      default:
        return <EnterButtonDefault />;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 1,
        border: `2px solid ${isFocused ? commonColors.purple600 : commonColors.lightGray}`,
        borderRadius: 1,
        transition: 'border 0.2s ease-in-out',
        '&:hover': {
          border: `2px solid ${isFocused ? commonColors.purple600 : commonColors.purple400}`
        }
      }}>
      <TextField
        fullWidth
        value={inputQuery}
        placeholder="Ask Something"
        multiline
        maxRows={3}
        sx={{
          flex: 1,
          marginRight: 1,
          '& fieldset': { border: 'none' }
        }}
        onClick={() => setIsFocused(true)}
        onChange={(e) => {
          onInputQueryChange(e.target.value);
          if (e.target.value) {
            setEnterButtonStatus(EnterButtonState.ACTIVE);
          } else {
            setEnterButtonStatus(EnterButtonState.DISABLED);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onFormSubmit();
        }}
        onBlur={() => setIsFocused(false)}
      />
      <Button
        data-testid="submit-button"
        type="submit"
        disableRipple
        sx={{
          height: '2.65rem',
          minWidth: '2.5rem',
          justifyContent: 'flex-end',
          '&:hover': {
            background: 'transparent'
          }
        }}
        onClick={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
        onMouseEnter={() => {
          if (enterButtonStatus !== EnterButtonState.DISABLED) {
            setPreviousEnterButtonStatus(enterButtonStatus);
            setEnterButtonStatus(EnterButtonState.HOVERED);
          }
        }}
        onMouseLeave={() => {
          if (inputQuery) {
            setEnterButtonStatus(EnterButtonState.ACTIVE);
          } else {
            setEnterButtonStatus(EnterButtonState.DISABLED);
          }
        }}
        onMouseDown={() => {
          setPreviousEnterButtonStatus(enterButtonStatus);
          setEnterButtonStatus(EnterButtonState.PRESSED);
          onFormSubmit();
        }}
        onMouseUp={() => {
          setEnterButtonStatus(previousEnterButtonStatus);
        }}>
        {retrieveEnterButton()}
      </Button>
    </Box>
  );
};
