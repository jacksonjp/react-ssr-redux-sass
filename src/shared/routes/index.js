// Libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// route
import routes from './routes';
import Wrapper from '../containers/wrapper';

class Routes extends Component {
  render() {
    const { location } = this.props;

    return (
      <Wrapper>
        <div>
          <Switch>
            {routes.map((route, key) => <Route key="key" location={location} {...route} />)}
          </Switch>
        </div>
      </Wrapper>
    );
  }
}

export default Routes;
