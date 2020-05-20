import { css } from 'glamor';
import React from 'react';
import { Navbar } from './Navbar';
import { theme } from '../theme';
import { EditView } from './EditView';

const styles = {
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.background,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232c434e' fill-opacity='0.34' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
    color: theme.onBackground,
  },
  content: {
    overflow: 'auto',
  },
  container: {
    width: '1000px',
    margin: '2rem auto',
  },
};

export const App = () => (
  <div {...css(styles.app)}>
    <Navbar />
    <div {...css(styles.content)}>
      <div {...css(styles.container)}>
        <EditView />
      </div>
    </div>
  </div>
);
