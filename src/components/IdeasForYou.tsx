import React from 'react';
import { Grid, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as SparkleIcon } from '../images/sparkleIcon.svg';
import { commonColors } from '../styles/styles';
import { IPersona } from '../types/Personas';
import { StyledButton } from '../styles/StyledButton';

export const IdeasForYou: React.FC<{
  persona: IPersona;
  onSelectQuestion: (value: string) => void;
}> = ({ persona, onSelectQuestion }) => (
  <Grid
    container
    item
    display="flex"
    flexDirection="column"
    justifyContent="between"
    sx={{
      p: 2,
      backgroundColor: `${commonColors.purple50}`
    }}>
    <Grid>
      <Grid container direction="row">
        <Typography>
          Great! You’ve selected<span style={{ fontWeight: 700 }}>&nbsp;{persona.label}</span>. You
          can change your role by refreshing the page. I have access to a vast amount of data on
          Focused Labs, including case studies, services, and even conversations with our CEO. You
          can ask me a question in the prompt bar, or try one of our prompt ideas below.
        </Typography>
      </Grid>
      <Typography fontWeight="700" marginTop="1.5rem">
        Some prompt ideas for you:
      </Typography>
    </Grid>
    <Grid display="flex" flexDirection="column" alignItems="flex-start" marginTop="0.5rem">
      {persona.promptIdeas.map((idea: string) => (
        <StyledButton key={persona.value} onClick={() => onSelectQuestion(idea)}>
          <SvgIcon
            sx={{
              mr: '0.5rem'
            }}>
            <SparkleIcon />
          </SvgIcon>
          <Typography>{idea}</Typography>
        </StyledButton>
      ))}
    </Grid>
  </Grid>
);
