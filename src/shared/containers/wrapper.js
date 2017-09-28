//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import styles from './wrapper.scss';

type Props = {
  children: PropTypes.element
};

class Wrapper extends Component<Props> {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>React Universal App (SSR + RR4 + SASS)</h1>
            <div />
            <nav className={styles.navigation}>
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/list">
                Redirect
              </Link>
              <Link className={styles.link} to="/users">
                Users
              </Link>
              <Link className={styles.link} to="/404">
                404
              </Link>
              <Link className={styles.link} to="/about">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Wrapper;
