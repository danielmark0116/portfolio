import * as React from 'react';

import * as style from '../styles/main.scss';

import { backgroundMoveAnimation } from '../animations/background';

interface IProps {
  children: any;
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
        <div>{children}</div>
      </main>
    );
  }
}
