import ServiceSection from './components/ServiceSection';

const MainServicesModule = () => {
  return (
    <div className="border-t-[1px] border-theme-primary-light">
      <ServiceSection
        link="/services/video-production"
        videoUrl="/hero_video.mp4"
        poster="/poster.jpg"
        color="dark"
        title={
          <span className="block uppercase">
            <span className="block">video</span>
            <span className="block font-bold">production</span>
          </span>
        }
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero."
      ></ServiceSection>
      <ServiceSection
        reverse
        link="/services/animated-video-production"
        color="dark"
        videoUrl="/hero_anim.mp4"
        poster="/poster.jpg"
        title={
          <span className="block uppercase">
            <span className="block">Animated video</span>
            <span className="block font-bold">production</span>
          </span>
        }
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero."
      ></ServiceSection>

      <ServiceSection
        link="/services/event-communication"
        videoUrl="/hero_event.mp4"
        poster="/poster.jpg"
        color="dark"
        title={
          <span className="block uppercase">
            <span className="block">Event communiaction</span>
            <span className="block font-bold">public relation 2.0</span>
          </span>
        }
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero."
      ></ServiceSection>
      <ServiceSection
        color="dark"
        link="/services/live-stream"
        reverse
        videoUrl="/hero.mp4"
        poster="/poster.jpg"
        title={
          <span className="block uppercase">
            <span className="block">Live streams</span>
            <span className="block font-bold">webinars</span>
          </span>
        }
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus perspiciatis necessitatibus ut dolore asperiores molestiae pariatur consequatur quisquam vero."
      ></ServiceSection>
    </div>
  );
};
export default MainServicesModule;
