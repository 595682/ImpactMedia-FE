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
    title: 'HANDS-FREE MANAGEMENT',
    description:
      'Save time and effort in managing your content team. Our expert-led professionals are independent, proactive, and highly dedicated to your success.',
    image: approach_1,
  },
  {
    id: 1,
    title: 'HIGH QUALITY OUTPUTS',
    description:
      'Place your goals in the hands of a network of experts with over X years of experience across audio, visual, and communications.',
    image: approach_2,
  },
  {
    id: 2,
    title: 'TAILORED TO YOUR GOALS',
    description:
      'We dive deep into your needs, desires, and goals, to ensure that your message is conveyed in the most effective and compelling way.',
    image: approach_3,
  },
];

const goals = [
  {
    id: 0,
    description: (
      <span>
        Studies show that the average viewer remembers{' '}
        <strong>95% of a message when they watch it,</strong> versus only 10%
        when they read it.
      </span>
    ),
    imageDescription: 'Playlist vector graphic',
    image: goal_map_1,
  },
  {
    id: 1,
    description: (
      <span>
        Users spend <strong>88% more time</strong> on websites that have{' '}
        <strong>videos </strong> on them.
      </span>
    ),
    imageDescription: 'Website with a video vector graphic',
    image: goal_map_2,
  },
  {
    id: 1,
    description: (
      <span>
        Video generates <strong>1200% more shares</strong> than both images and
        text combined.
      </span>
    ),
    imageDescription: 'Video player vector graphic',
    image: goal_map_3,
  },
  {
    id: 1,
    description: (
      <span>
        Videos up to <strong>2 minutes long</strong> receive the most
        engagement.
      </span>
    ),
    imageDescription: 'User watching online video vector graphic',
    image: goal_map_4,
  },
];

const ctaContent = (
  <>
    <span className="block">
      Have a <span className="text-theme-secondary">story</span> in mind?
    </span>
    <span className="block">
      We’ll help you <span className="text-theme-secondary">tell it.</span>
    </span>
  </>
);

const heroOptions = [
  {
    id: 0,
    title: 'Videos',
    url: '/services/video-production',
    video: '/dev_video.webm',
    poster: '/poster.jpg',
  },
  {
    id: 1,
    title: 'Animated Videos',
    url: '/services/animated-video-production',
    video: '/dev_anim.mp4',
    poster: '/poster.jpg',
  },
  {
    id: 2,
    title: 'Events',
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
