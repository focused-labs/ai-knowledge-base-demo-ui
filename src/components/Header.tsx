import * as React from 'react';
import { AppBar, Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { commonColors } from '../styles/styles';
import { ReactComponent as SparkleIcon } from '../images/sparkle-icon2colors.svg';

export const Header = () => {
  const screenIsMobile = useMediaQuery('(max-width:1100px)');

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: commonColors.backgroundBlue,
          height: '7vh',
          minHeight: '70px',
          paddingBottom: '.10rem',
          paddingTop: '1rem',
          boxShadow: 'none'
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingBottom: '.25rem' }}>
          <Grid container item md={6} marginLeft="2rem">
            <Grid item sx={{ pr: '.35rem', pt: screenIsMobile ? '0rem' : '.66rem' }}>
              <SparkleIcon style={{ fontSize: screenIsMobile ? '1rem' : '2rem' }}></SparkleIcon>
            </Grid>
            <Typography
              sx={{
                color: commonColors.purple600,
                fontSize: screenIsMobile ? '1.15rem' : '2rem',
                fontWeight: 'bold'
              }}>
              Knowledge
            </Typography>
            <Typography
              sx={{
                color: commonColors.orange,
                fontSize: screenIsMobile ? '1.15rem' : '2rem',
                fontWeight: 'bold'
              }}>
              &nbsp;Base
            </Typography>
            <Typography
              sx={{
                color: commonColors.darkGray,
                background: commonColors.lightGray,
                fontSize: screenIsMobile ? '1.15rem' : '2rem',
                borderRadius: '10px',
                padding: '0rem 0.25rem 0rem 0.25rem',
                marginLeft: '0.5rem'
              }}>
              Beta
            </Typography>
          </Grid>
          <Grid item xs={0} md={1} />
        </Grid>
      </AppBar>
    </div>
  );
};
