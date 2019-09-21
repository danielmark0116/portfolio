import * as React from 'react';

import Background from '../Components/Background';

import * as style from '../styles/main.scss';

export default class MainScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Background>
        <div>
          <h4 className={style.text_center}>pic</h4>
          <h1>Daniel Grychtoł</h1>
          <h4 className={style.text_center}>socials</h4>
        </div>
      </Background>
    );
  }
}
