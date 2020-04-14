import * as React from 'react';

import {Bar} from 'src/components/app/compoents/bar/bar';
import {SideMenu} from 'src/components/app/compoents/sideMenu/side-menu';

import { WordsList } from 'src/pages/wordsList/words-list';

import {appStyles} from 'src/components/app/app.styles';

type appClassKeys = 'root' | 'content';

export function App(): JSX.Element {
  const classes: Record<appClassKeys, string> = appStyles({});
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);mobileOpen
  };

  return (
    <div className={classes.root}>
      <Bar onDrawerToggle={handleDrawerToggle} />
      <SideMenu onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      <main className={classes.content}>
        <WordsList />
      </main>
    </div>
  );
}
