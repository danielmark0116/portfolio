import * as React from 'react';
import { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import * as styles from '../styles/main.scss';

import Input from './Input';

interface IProps {
  test: string;
  func(itemsVariable: number): number;
}

interface IState {
  inputValue: string;
}

class App extends React.Component<IProps, IState> {
  static defaultProps = {
    test: 'default string'
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value }: any = e.target;

    this.setState({
      inputValue: value
    });
  };

  render() {
    const { test, func } = this.props;
    const { inputValue } = this.state;

    return (
      <Fragment>
        <h1 className={styles.yellow}>DANIEL's PORTFOLIO PAGE</h1>
        <Input inputValue={inputValue} handleChange={this.handleChange} />
        <p>Input Value: {inputValue}</p>
        <p className={styles.main}>{test}</p>
        <p className={styles.main}>{func(5)}</p>
      </Fragment>
    );
  }
}

export default hot(module)(App);
