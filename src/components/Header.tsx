import { AppBar, Box, Toolbar } from '@mui/material';
import * as React from 'react';
import { ReactComponent as FocusedLabsLogo } from '../images/fl-logo.svg';
import { ReactComponent as Octocatlogo } from '../images/octocat.svg';
import { ReactComponent as Linkedinlogo } from '../images/linkedin-logo.svg';
import { commonColors } from '../styles/styles';

export const Header = () => (
  <AppBar
    position="static"
    sx={{
      background: commonColors.white,
      height: '7vh',
      boxShadow: 'none'
    }}>
    <Toolbar>
      <Box
        display="flex"
        flexGrow={1}
        onClick={() => window.open('https://focusedlabs.io/', '_blank')}>
        <FocusedLabsLogo></FocusedLabsLogo>
      </Box>
      <Box
        sx={{ paddingRight: '1rem' }}
        onClick={() =>
          window.open('https://www.linkedin.com/company/build-focused-labs/', '_blank')
        }>
        <Linkedinlogo></Linkedinlogo>
      </Box>
      <Box
        onClick={() =>
          window.open('https://github.com/focused-labs/knowledge-base-demo', '_blank')
        }>
        <Octocatlogo></Octocatlogo>
      </Box>
    </Toolbar>
  </AppBar>
);
