//@flow

// Libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// route
import routes from './routes';
import Wrapper from '../containers/wrapper';

class Routes extends Component<PropTypes.element> {
  render() {
    return (
      <Wrapper>
        <div>
          <Switch>
            {routes.map((route, key) => <Route key={key} {...route} />)}
          </Switch>
        </div>
      </Wrapper>
    );
  }
}

export default Routes;
