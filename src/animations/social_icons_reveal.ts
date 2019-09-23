import { TimelineLite, Power1 } from 'gsap/TweenMax';
import { Back } from 'gsap';

export const btnReveal = (
  node: HTMLDivElement,
  initDelay: number,
  index: number
) => {
  const animationTimeline = new TimelineLite();

  animationTimeline
    .to(node, 0.3, { y: -20, ease: Power1.easeInOut })
    .to(node, 0.8, { y: 0, ease: Back.easeOut.config(4) })
    .delay(initDelay + 0.15 * index);
};
