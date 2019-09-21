import * as React from 'react';
import { Fragment } from 'react';

import * as style from '../styles/main.scss';

interface IProps {
  position: 1 | 2;
}

export default function BackgroundColumns(props: IProps) {
  const { position } = props;

  return (
    <Fragment>
      <div
        className={
          position === 1
            ? style.background_column_left
            : position === 2
            ? style.background_column_right
            : null
        }
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
}
