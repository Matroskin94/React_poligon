import {makeStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type wordCardClasses = 'letterIcon' | 'actionIcon' | 'actionDelete' | 'cardContent' | 'card' | 'action';

export const wordsCardStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 180,
  },
  letterIcon: {
    backgroundColor: red[500]
  },
  actionIcon: {
    padding: 6
  },
  actionDelete: {
    padding: 6,
    marginLeft: 'auto',
    marginRight: 0
  },
  action: {
    marginTop: 'auto',
  },
  cardContent: {
    padding: '4px 16px',
    maxHeight: 48,
  },
});
