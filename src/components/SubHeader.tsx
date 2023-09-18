import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { commonColors } from '../styles/styles';
import { ReactComponent as SparkleIcon } from '../images/sparkle-icon2colors.svg';

export const SubHeader = () => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{ padding: '.1rem' }}>
    <Grid item>
      <SparkleIcon style={{ fontSize: '1.5rem', marginRight: '.5rem' }}></SparkleIcon>
    </Grid>
    <Typography
      sx={{
        color: commonColors.black,
        fontSize: '1.15rem',
        fontWeight: 'bold'
      }}>
      Knowledge Base
    </Typography>
    <Typography
      sx={{
        color: commonColors.darkGray,
        background: commonColors.lightGray,
        fontSize: '1.15rem',
        borderRadius: '10px',
        padding: '0rem 0.25rem 0rem 0.25rem',
        marginLeft: '0.5rem'
      }}>
      Beta
    </Typography>
  </Grid>
);
