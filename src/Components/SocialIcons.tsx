import * as React from 'react';
import { useEffect } from 'react';

import SocialIcon from './SocialIcon';

import * as style from '../styles/main.scss';

export default function SocialIcons() {
  return (
    <div className={style.social_icons_container}>
      <SocialIcon icon="github" index={1} />
      <SocialIcon icon="linkedin" index={2} />
      <SocialIcon icon="instagram" index={3} />
    </div>
  );
}
