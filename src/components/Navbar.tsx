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
    justifyContent: 'space-between',
    paddingRight: '2rem',
  },
  btn: {
    backgroundColor: theme.accent,
    borderColor: theme.accent,
    '&:hover': {
      backgroundColor: theme.accentHover,
      borderColor: theme.accentHover,
    },
  },
};

export const Navbar = () => {
  return (
    <div {...css(styles.navbar)}>
      <span role={'img'} aria-label={'logo'} {...css(styles.logo)}>
        🏋🏽‍♀️
      </span>
      <Button variant='primary' {...css(styles.btn)}>
        Exercise!
      </Button>
    </div>
  );
};
