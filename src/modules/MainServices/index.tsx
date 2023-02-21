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

import {
  videoServiceDetails,
  animServiceDetails,
  streamServiceDetails,
  eventServiceDetails,
} from 'contents/servicesDetails';

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
            <span className="block">{videoServiceDetails.title1}</span>
            <span className="block font-bold">
              {videoServiceDetails.title2}
            </span>
          </span>
        }
        description={videoServiceDetails.description}
      />

      <ServiceSection
        reverse
        link="/services/animated-video-production"
        color="dark"
        videoUrl={anim}
        poster={animThumbnail}
        title={
          <span className="block uppercase">
            <span className="block">{animServiceDetails.title1}</span>
            <span className="block font-bold">{animServiceDetails.title2}</span>
          </span>
        }
        description={animServiceDetails.description}
      />

      <ServiceSection
        color="dark"
        link="/services/live-stream"
        videoUrl={stream}
        poster={streamThumbnail}
        title={
          <span className="block uppercase">
            <span className="block">{streamServiceDetails.title1}</span>
            <span className="block font-bold">
              {streamServiceDetails.title2}
            </span>
          </span>
        }
        description={streamServiceDetails.description}
      />

      <ServiceSection
        reverse
        link="/services/event-communication"
        videoUrl={event}
        poster={eventThumbnail}
        color="dark"
        title={
          <span className="block uppercase">
            <span className="block">{eventServiceDetails.title1}</span>
            <span className="block font-bold">
              {' '}
              {eventServiceDetails.title2}
            </span>
          </span>
        }
        description={eventServiceDetails.description}
      />
    </div>
  );
};
export default MainServicesModule;
