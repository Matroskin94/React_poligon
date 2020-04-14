import * as React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton
} from '@material-ui/core';
import Dotdotdot from 'react-dotdotdot';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {wordsCardStyles, wordCardClasses} from 'src/components/wordCard/word-card.styles';
import { WordInfo } from './components/word-info/word-info';

export interface WordSynonym {
  word: string;
  isInDictionary: boolean;
}

export interface WordCardProps {
  word: string;
  translation: string;
  description: string;
  synonyms: WordSynonym[];
}

export function WordCard(wordInfo: WordCardProps): JSX.Element {
  const classes: Record<wordCardClasses, string> = wordsCardStyles({});
  const [isInfoOpen, setInfoOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setInfoOpen(true);
  };

  const handleClose = (): void => {
    setInfoOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.letterIcon}>
            {wordInfo.word.charAt(0) || ''}
          </Avatar>
        }
        title={wordInfo.word}
        subheader={wordInfo.translation}
      />
        <CardContent className={classes.cardContent}>
          <Dotdotdot clamp={2}>
            {wordInfo.description}
          </Dotdotdot>
        </CardContent>
        <CardActions disableSpacing className={classes.action}>
          <IconButton className={classes.actionIcon}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleClickOpen} className={classes.actionIcon}>
            <VisibilityIcon />
          </IconButton>
          <IconButton edge="end" className={classes.actionDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <WordInfo wordInfo={wordInfo} isInfoOpen={isInfoOpen} onClose={handleClose}/>
      </Card>
  );
}
