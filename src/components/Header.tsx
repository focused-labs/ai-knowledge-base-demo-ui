import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactComponent as FocusedLabsLogo } from '../images/fl-logo.svg';
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
        <IconButton style={{ backgroundColor: 'transparent' }}>
          <FocusedLabsLogo></FocusedLabsLogo>
        </IconButton>
      </Box>
      <IconButton
        style={{ backgroundColor: 'transparent' }}
        sx={{ paddingRight: '1rem', color: 'black' }}
        onClick={() =>
          window.open('https://www.linkedin.com/company/build-focused-labs/', '_blank')
        }>
        <LinkedInIcon></LinkedInIcon>
      </IconButton>
      <IconButton
        style={{ backgroundColor: 'transparent' }}
        sx={{ color: 'black' }}
        onClick={() =>
          window.open('https://github.com/focused-labs/knowledge-base-demo', '_blank')
        }>
        <GitHubIcon></GitHubIcon>
      </IconButton>
    </Toolbar>
  </AppBar>
);
