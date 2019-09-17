import * as React from 'react';

import Background from '../Components/Background';

export default class MainScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Background>
        <div>
          <p>hello world.</p>
        </div>
      </Background>
    );
  }
}
