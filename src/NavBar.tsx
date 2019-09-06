import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          uleg - explod up
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
