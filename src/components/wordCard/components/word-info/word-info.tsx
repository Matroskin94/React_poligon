import * as React from 'react';
import {
  AppBar,
  Avatar,
  Chip,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  Divider,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

import CloseIcon from '@material-ui/icons/Close';

import {WordCardProps, WordSynonym} from 'src/components/wordCard/word-card';

import {
  wordInfoClasses,
  wordInfoStyles
} from 'src/components/wordCard/components/word-info/word-info.styles';

interface WordInfoProps {
  isInfoOpen: boolean;
  wordInfo: WordCardProps;
  onClose(): void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function renderSynonym(classes: Record<wordInfoClasses, string>): (synonym: WordSynonym) => JSX.Element {
  return function renderItem(synonym: WordSynonym): JSX.Element {
    const chipColor: 'primary' | 'default' = synonym.isInDictionary ? 'primary' : 'default';
    const chipClass: string = synonym.isInDictionary ? classes.activeSynonym : '';

    return (
      <Chip
        color={chipColor}
        className={chipClass}
        size="small"
        avatar={<Avatar>{synonym.word.charAt(0).toLocaleUpperCase()}</Avatar>}
        label={synonym.word}
      />
    );
  }
}

export function WordInfo({isInfoOpen, onClose, wordInfo}: WordInfoProps): JSX.Element {
  const classes: Record<wordInfoClasses, string> = wordInfoStyles({});
  const synonyms: WordSynonym[] = wordInfo.synonyms || [];

  return (
    <Dialog fullScreen open={isInfoOpen} onClose={onClose} TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography className={classes.wordTitle} variant="h6">
              {wordInfo.word}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.wordContent}>
          <div className={classes.wordContentItem}>
            <Typography variant="caption">Translation</Typography>
            <Typography>{wordInfo.translation}</Typography>
            <Divider />
          </div>
          <div className={classes.wordContentItem}>
            <Typography variant="caption">Description</Typography>
            <Typography gutterBottom>{wordInfo.description}</Typography>
            <Divider />
          </div>
          <div className={classes.wordContentItem}>
            <Typography variant="caption">Sentense examples</Typography>
            <Typography gutterBottom>1. {wordInfo.description}</Typography>
            <Typography gutterBottom>2. {wordInfo.description}</Typography>
            <Typography gutterBottom>3. {wordInfo.description}</Typography>
            <Divider />
          </div>
          <div className={classes.wordContentItem}>
            <Typography variant="caption" gutterBottom>Synonyms</Typography>
            <div className={classes.wordSynonyms}>
              {synonyms.map(renderSynonym(classes))}
            </div>
          </div>
        </div>
      </Dialog>
  );
}
