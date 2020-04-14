import { makeStyles, Theme } from '@material-ui/core/styles';

export const sideMenuStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: (props: {drawerWidth: number}): number => props.drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: (props: {drawerWidth: number}): number => props.drawerWidth,
  },
}));
