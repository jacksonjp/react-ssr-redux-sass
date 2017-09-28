// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';

// Components
import Routes from '../shared/routes';

class AppContainer extends Component<PropTypes> {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    );
  }
}

export default AppContainer;
