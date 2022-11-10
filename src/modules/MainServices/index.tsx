import {
  anim,
  animThumbnail,
  event,
  eventThumbnail,
  stream,
  streamThumbnail,
  video,
  videoThumbnail,
} from 'contents/videoUrls';

import ServiceSection from './components/ServiceSection';

const MainServicesModule = () => {
  return (
    <div className="border-t-[1px] border-theme-primary-light">
      <ServiceSection
        link="/services/video-production"
        videoUrl={video}
        poster={videoThumbnail}
        color="dark"
        title={
          <span className="block uppercase">
            <span className="block">video</span>
            <span className="block font-bold">production</span>
          </span>
        }
        description="Bring your stories to life with our seamless, engaging, and impactful video production. With storyboarding, cinematography, sound design, and high-end equipment, we’ll capture your audience’s attention and get your message across for you."
      />

      <ServiceSection
        reverse
        link="/services/animated-video-production"
        color="dark"
        videoUrl={anim}
        poster={animThumbnail}
        title={
          <span className="block uppercase">
            <span className="block">Animated video</span>
            <span className="block font-bold">production</span>
          </span>
        }
        description="Step into a world of visual storytelling through animation. With a wide variety of 2D and 3D motion graphics, characters, designs, and typography, we’ll convey your most important messages in an engaging and creative way."
      />

      <ServiceSection
        color="dark"
        link="/services/live-stream"
        videoUrl={stream}
        poster={streamThumbnail}
        title={
          <span className="block uppercase">
            <span className="block">Live streams </span>
            <span className="block font-bold">& webinars</span>
          </span>
        }
        description="Connect with audiences across the world, in real time and in high definition. Tap on our live streaming expertise that covers all bases, from high-end camera and streaming gear to back-up Internet connection and well-trained on-site staff."
      />

      <ServiceSection
        reverse
        link="/services/event-communication"
        videoUrl={event}
        poster={eventThumbnail}
        color="dark"
        title={
          <span className="block uppercase">
            <span className="block">Events &</span>
            <span className="block font-bold"> public relations</span>
          </span>
        }
        description="Elevate the communication that serves as a bridge between your organisation and the world. We create an effective communications strategy across newsletters, press releases, journalistic articles, and more, then execute, manage and evaluate it for your greatest success."
      />
    </div>
  );
};
export default MainServicesModule;
