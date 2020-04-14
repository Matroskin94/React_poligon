import { makeStyles} from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';

export const appStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  content: {
    flexGrow: 1,
    padding: '88px 24px 24px',
    backgroundColor: indigo[50]
  },
}));
