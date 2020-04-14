import {makeStyles, Theme} from '@material-ui/core';

export type wordInfoClasses = 'wordTitle' | 'wordContent' | 'wordContentItem' | 'wordSynonyms' | 'activeSynonym';

export const wordInfoStyles = makeStyles((theme: Theme) => {
  console.log('THEME', theme);
  return ({
    wordTitle: {
      marginLeft: theme.spacing(2),
    },
    wordContent: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(2)
    },
    wordContentItem: {
      marginBottom: theme.spacing(1)
    },
    wordSynonyms: {
      marginTop: theme.spacing(1),
      '& div': {
        marginRight: theme.spacing(1)
      }
    },
    activeSynonym: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  });
});
