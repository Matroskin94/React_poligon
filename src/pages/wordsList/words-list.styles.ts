import {makeStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type wordListClasses = 'letterRow' | 'letterRowHeader' | 'letterIcon';

export const wordsListStyles = makeStyles({
  letterRow: {
    marginBottom: 15
  },
  letterRowHeader: {
    marginBottom: 15
  },
  letterIcon: {
    backgroundColor: red[500]
  }
});
