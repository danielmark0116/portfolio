import * as React from 'react';

import BackgroundColumns from './BackgroundColumns';

import * as style from '../styles/main.scss';

import { backgroundMoveAnimation } from '../animations/background';
import { animateBgColumns } from '../animations/background_columns';

interface IProps {
  children: React.ReactNode;
}

export default class Background extends React.Component<IProps, {}> {
  nodeRef = React.createRef<HTMLElement>();
  col1Ref = React.createRef<HTMLDivElement>();
  col2Ref = React.createRef<HTMLDivElement>();
  col3Ref = React.createRef<HTMLDivElement>();
  col4Ref = React.createRef<HTMLDivElement>();
  col5Ref = React.createRef<HTMLDivElement>();
  col6Ref = React.createRef<HTMLDivElement>();
  col7Ref = React.createRef<HTMLDivElement>();
  col8Ref = React.createRef<HTMLDivElement>();

  mouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const node = this.nodeRef.current;
    backgroundMoveAnimation(e, node);

    animateBgColumns(
      [
        this.col1Ref.current,
        this.col2Ref.current,
        this.col3Ref.current,
        this.col4Ref.current,
        this.col5Ref.current,
        this.col6Ref.current,
        this.col7Ref.current,
        this.col8Ref.current
      ],
      e
    );
  };

  render() {
    const { children } = this.props;

    return (
      <main
        onMouseMove={this.mouseMove}
        ref={this.nodeRef}
        className={style.main_container}
      >
        <BackgroundColumns
          nodes={[this.col1Ref, this.col2Ref, this.col3Ref, this.col4Ref]}
          position={1}
        />
        <BackgroundColumns
          nodes={[this.col5Ref, this.col6Ref, this.col7Ref, this.col8Ref]}
          position={2}
        />
        <div>{children}</div>
      </main>
    );
  }
}
