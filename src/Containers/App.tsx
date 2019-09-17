import * as React from 'react';
import { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import MainScreen from './MainScreen';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <MainScreen />
      </Fragment>
    );
  }
}

export default hot(module)(App);
