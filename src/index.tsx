import * as React from 'react';
import { render } from 'react-dom';
import App from './Containers/App';

render(
  <App test={'test string'} func={itemsVariable => itemsVariable} />,
  document.getElementById('root')
);
