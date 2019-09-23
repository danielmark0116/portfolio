import * as React from 'react';

import * as LogoLarge from '../assets/logo@2x.png';

import * as style from '../styles/main.scss';

interface IProps {
  size: 'large' | 'small';
}

export default function Logo(props: IProps) {
  const { size } = props;

  const logoSize =
    size === 'small'
      ? style.logo_small
      : size === 'large'
      ? style.logo_large
      : null;

  return (
    <div className={style.logo}>
      <div className={style.logo_bg}></div>
      <img src={LogoLarge} className={logoSize} alt="" />
    </div>
  );
}
