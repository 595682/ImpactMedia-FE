import approach_1 from 'public/assets/home/approach_1.svg';
import approach_2 from 'public/assets/home/approach_2.svg';
import approach_3 from 'public/assets/home/approach_3.svg';
import goal_map_1 from 'public/assets/home/goal_map_1.svg';
import goal_map_2 from 'public/assets/home/goal_map_2.svg';
import goal_map_3 from 'public/assets/home/goal_map_3.svg';
import goal_map_4 from 'public/assets/home/goal_map_4.svg';

const approach = [
  {
    id: 0,
    title: 'INTRODUCTION MEETING',
    description: 'Where we get to know your and find solutions',
    image: approach_1,
  },
  {
    id: 1,
    title: 'CONSULTATION MEETING',
    description:
      'We meet with you again to discuss your feedback on the first drafts',
    image: approach_2,
  },
  {
    id: 2,
    title: 'REGULAR REPORTING VIA E-MAIL AND/OR PHONE',
    description: 'We are always there for you',
    image: approach_3,
  },
];

const goals = [
  {
    id: 0,
    description: (
      <span>
        According to studies, the average viewer remembers{' '}
        <strong>95% of a message when it is watched,</strong> whereas only{' '}
        <strong>10% when read.</strong>
      </span>
    ),
    imageDescription: 'Playlist vector graphic',
    image: goal_map_1,
  },
  {
    id: 1,
    description: (
      <span>
        Users spend <strong>88% more time</strong> on a website that has{' '}
        <strong>video.</strong>
      </span>
    ),
    imageDescription: 'Website with a video vector graphic',
    image: goal_map_2,
  },
  {
    id: 1,
    description: (
      <span>
        Video generates <strong>1200% more shares</strong> than both{' '}
        <strong>images and text.</strong>
      </span>
    ),
    imageDescription: 'Video player vector graphic',
    image: goal_map_3,
  },
  {
    id: 1,
    description: (
      <span>
        Videos up to <strong>2 minutes long</strong> receive the{' '}
        <strong>most engagement.</strong>
      </span>
    ),
    imageDescription: 'User watching online video vector graphic',
    image: goal_map_4,
  },
];

const ctaContent = (
  <>
    <span className="block">We are here to make</span>
    <span className="block">
      your event a{' '}
      <span className="font-bold text-theme-secondary">SUCCESS!</span>
    </span>
  </>
);

const heroOptions = [
  {
    id: 0,
    title: 'Video Production',
    url: '/services/video-production',
    video: '/hero_video.mp4',
    poster: '/poster.jpg',
  },
  {
    id: 1,
    title: 'Animated Videos',
    url: '/services/animated-video-production',
    video: '/hero_anim.mp4',
    poster: '/poster.jpg',
  },
  {
    id: 2,
    title: 'Event Communication',
    url: '/services/event-communication',
    video: '/hero_event.mp4',
    poster: '/poster.jpg',
  },
  {
    id: 3,
    title: 'Live Streams',
    url: '/services/live-stream',
    video: '/hero.mp4',
    poster: '/poster.jpg',
  },
];

export { approach, ctaContent, goals, heroOptions };
