import * as React from 'react';
import SVG from 'react-inlinesvg';
import { useEffect } from 'react';

import * as InstagramIcon from '../assets/instagram.svg';
import * as GitHubIcon from '../assets/github.svg';
import * as LinkedInIcon from '../assets/linkedin.svg';

import { btnHover, btnReset } from '../animations/social_icon_hover';
import { btnReveal } from '../animations/social_icons_reveal';

import * as style from '../styles/main.scss';

interface IProps {
  icon: 'instagram' | 'linkedin' | 'github';
  index?: number;
}

export default function SocialIcon(props: IProps) {
  const { icon, index } = props;

  const iconRef = React.createRef<HTMLDivElement>();
  const iconBgRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    btnReveal(iconRef.current, 0.5, index);
  });

  let iconToDisplay;

  switch (icon) {
    case 'instagram':
      iconToDisplay = InstagramIcon;
      break;
    case 'github':
      iconToDisplay = GitHubIcon;
      break;
    case 'linkedin':
      iconToDisplay = LinkedInIcon;
      break;
    default:
      break;
  }

  return (
    <div
      ref={iconRef}
      className={style.social_icon}
      onMouseEnter={() => {
        btnHover(iconRef.current, iconBgRef.current);
      }}
      onMouseLeave={() => {
        btnReset(iconRef.current, iconBgRef.current);
      }}
    >
      <SVG src={iconToDisplay} />
      <div className={style.social_icon_bg} ref={iconBgRef} />
    </div>
  );
}

SocialIcon.defaultProps = {
  index: 1
};
