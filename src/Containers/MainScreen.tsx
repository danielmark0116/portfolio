import * as React from 'react';

import Background from '../Components/Background';

import Logo from '../Components/Logo';
import Title from '../Components/Title';
import SocialIcons from '../Components/SocialIcons';

import * as style from '../styles/main.scss';

export default class MainScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Background>
        <div>
          <Logo size="large" />
          <Title>Daniel Grychtoł</Title>
          <SocialIcons />
        </div>
      </Background>
    );
  }
}
