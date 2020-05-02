import { css } from 'glamor';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { theme } from '../theme';

const styles = {
  logo: {
    fontSize: '4rem',
    marginLeft: '2rem',
  },
  navbar: {
    width: '100%',
    backgroundColor: theme.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '2rem',
  },
  title: {
    color: theme.onPrimary,
    fontWeight: 600,
    fontSize: '2rem',
    marginLeft: '1rem',
  },
};

export const Navbar = () => {
  return (
    <div {...css(styles.navbar)}>
      <span role={'img'} aria-label={'logo'} {...css(styles.logo)}>
        🏋🏽‍♀️
      </span>
      <span {...css(styles.title)}>Exercise Timers</span>
    </div>
  );
};
