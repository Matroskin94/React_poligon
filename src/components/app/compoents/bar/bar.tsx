import * as React from 'react';
import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';

import {barStyles} from 'src/components/app/compoents/bar/bar.styles';

interface BarProps {
  drawerWidth?: number;
  onDrawerToggle(): void;
}

export function Bar({onDrawerToggle, drawerWidth = 240}: BarProps): JSX.Element {
  const classes = barStyles({drawerWidth});

  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <LanguageIcon className={classes.logoIcon} />
            LangNote
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
  );
}