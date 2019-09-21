import * as React from 'react';

import BackgroundColumns from './BackgroundColumns';

import * as style from '../styles/main.scss';

import { backgroundMoveAnimation } from '../animations/background';

interface IProps {
  children: React.ReactNode;
}

export default class Background extends React.Component<IProps, {}> {
  nodeRef = React.createRef<HTMLElement>();

  mouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const node = this.nodeRef.current;
    backgroundMoveAnimation(e, node);
  };

  render() {
    const { children } = this.props;

    return (
      <main
        onMouseMove={this.mouseMove}
        ref={this.nodeRef}
        className={style.main_container}
      >
        <BackgroundColumns position={2} />
        <BackgroundColumns position={1} />
        <div>{children}</div>
      </main>
    );
  }
}
