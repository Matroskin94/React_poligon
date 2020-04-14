import * as React from 'react';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import SpellcheckIcon from '@material-ui/icons/Spellcheck';

import {sideMenuStyles} from 'src/components/app/compoents/sideMenu/side-menu.styles';

interface SideMenuProps {
  mobileOpen: boolean;
  drawerWidth?: number;
  onDrawerToggle(): void;
}

type sideMenuClassKeys = 'drawer' | 'drawerPaper' | 'toolbar';

function renderDrawer(classes: Record<sideMenuClassKeys, string>): JSX.Element {
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Words'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><SpellcheckIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export function SideMenu({drawerWidth = 240, mobileOpen, onDrawerToggle}: SideMenuProps): JSX.Element {
  const sideMenuClasses = sideMenuStyles({drawerWidth});
  const theme = useTheme();

  return (
    <nav className={sideMenuClasses.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={onDrawerToggle}
            classes={{
              paper: sideMenuClasses.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {renderDrawer(sideMenuClasses)}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: sideMenuClasses.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {renderDrawer(sideMenuClasses)}
          </Drawer>
        </Hidden>
      </nav>
  );
}
