import React from 'react';
import { Button, Grid, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as SparkleIcon } from '../images/sparkleIcon.svg';
import { commonColors } from '../styles/styles';
import { IPersona } from '../types/Personas';

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
      borderRadius: '1rem',
      border: `1px solid ${commonColors.darkGray}`
    }}>
    <Grid>
      <Typography fontWeight="700" paddingLeft="0.5rem" color={commonColors.black}>
        Some prompt ideas for you:
      </Typography>
    </Grid>
    <Grid display="flex" flexDirection="column" alignItems="flex-start">
      {persona.promptIdeas.map((idea: string, i: number) => (
        <Button
          key={i}
          sx={{
            textAlign: 'left',
            textTransform: 'none',
            cursor: 'pointer',
            color: commonColors.purple600,
            backgroundColor: commonColors.purple100,
            border: `1px solid ${commonColors.purple600}`,
            borderRadius: '1.5rem',
            p: '.5rem 1.375rem',
            m: '.5rem',
            '&:hover': {
              backgroundColor: commonColors.purple200
            },
            '&:active': {
              backgroundColor: commonColors.purple300
            }
          }}
          onClick={() => onSelectQuestion(idea)}>
          <SvgIcon
            sx={{
              mr: '.5rem'
            }}>
            <SparkleIcon />
          </SvgIcon>
          <Typography>{idea}</Typography>
        </Button>
      ))}
    </Grid>
  </Grid>
);
