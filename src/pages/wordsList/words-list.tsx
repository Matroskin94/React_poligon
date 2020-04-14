import * as React from 'react';
import {
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

import { WordCard } from 'src/components/wordCard/word-card';

import {wordListClasses, wordsListStyles} from 'src/pages/wordsList/words-list.styles';

const fakeWords = [{
  word: 'Concurrent',
  translation: 'Параллельный',
  description: 'If two lines don\'t cross they are concurrent',
  synonyms: [],
}, {
  word: 'Arrange',
  translation: 'Организовывать',
  description: 'To do some special preparation for anything: arrange meeting',
  synonyms: [{
    word: 'Settle',
    isInDictionary: false
  }, {
    word: 'Organize',
    isInDictionary: true
  }
],
}, {
  word: 'Arrange1',
  translation: 'Организовывать',
  description: 'To do some special preparation for anything: arrange meeting',
  synonyms: [],
}];

function renderCard(word: any): JSX.Element {
  return (
    <Grid key={word.word} item xs={12} sm={6} md={4}>
      <WordCard
        {...word}
      />
    </Grid>
  );
}

export function WordsList(): JSX.Element {
  const classes: Record<wordListClasses, string> = wordsListStyles({});

  return (
    <div>
      <div className={classes.letterRow}>
        <div className={classes.letterRowHeader}>
          <Typography variant="h5">A</Typography>
          <Divider />
        </div>
        <Grid container spacing={3}>
          {fakeWords.map(renderCard)}
        </Grid>
      </div>
    </div>
  );
}
