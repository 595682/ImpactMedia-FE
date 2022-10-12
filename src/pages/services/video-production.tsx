import { goals } from 'contents/index';
import { video } from 'contents/videoUrls';
import type { GetStaticProps } from 'next';
import fact_1 from 'public/assets/video_prod/fact_1.svg';
import fact_2 from 'public/assets/video_prod/fact_2.svg';
import fact_3 from 'public/assets/video_prod/fact_3.svg';
import React from 'react';

import client from '@/lib/gql/client';
import { GET_CLIENT_FEEDBACKS } from '@/lib/gql/queries/clientFeedback';
import GoalmapModulev2 from '@/modules/Goalmap';
import LayoutModule from '@/modules/Layout';
import Title from '@/modules/Layout/components/Title';
import StatelessHero from '@/modules/MainHero/statelessHero';
import ClientFeedback from '@/modules/MainServices/components/ClientFeedback';
import Facts from '@/modules/MainServices/components/Facts';
import SpreadMessage from '@/modules/MainServices/components/SpreadMessage';
import Summary from '@/modules/MainServices/components/Summary';
import Videocomparetable from '@/modules/MainServices/components/Videocomparetable';
import ServicesModule from '@/modules/Services';
import type { ClientFeedbackEntityResponseCollection } from '@/types';
import yearsCounter from '@/utils/yearsCounter';

const facts = [
  {
    id: 0,
    title: 'FACT 1',
    description:
      'We get to know your goals, needs, and message inside and out before starting production.',
    image: fact_1,
  },
  {
    id: 1,
    title: 'FACT 2',
    description:
      'We make sure that our video concept is aligned to your vision, mission, and values.',
    image: fact_2,
  },
  {
    id: 2,
    title: 'FACT 3',
    description: 'We speak right to the heart of your target audience.',
    image: fact_3,
  },
];

const compareTableRows = [
  {
    id: 0,
    title: 'Story',
    good: {
      title: 'Tailored to your goals',
      content:
        'We dive deep into your needs, desires, and goals, to ensure that your message is conveyed in the most effective and compelling way.',
      isOk: true,
    },
    bad: {
      title: 'One-size-fits-all approach',
      content:
        'Most audio-visual agencies offer a one-size-fits-all solution that packages your story into a predetermined, unoriginal structure.',
      isOk: false,
    },
  },
  {
    id: 1,
    title: 'Style',
    good: {
      title: 'Storytelling-driven',
      content:
        'Our style is creative, unique, and one-of-a-kind - the kind that gets audiences engaged,excited, inspired, and ready to take action.',
      isOk: true,
    },
    bad: {
      title: 'Information-driven',
      content:
        'When tasked to convey an important message, most agencies adopt a boring, common, and one-dimensional style.',
      isOk: false,
    },
  },
  {
    id: 2,
    title: 'Strategy',
    good: {
      title: 'Proven',
      content: `With our team’s ${yearsCounter} years of extensive video production experience, we can create the most effective strategy to tell your story.`,
      isOk: true,
    },
    bad: {
      title: 'Experimental',
      content:
        'Most agencies fumble their way through a strategy, as their lack of expertise makes it difficult for them to know what works and what doesn’t.',
      isOk: false,
    },
  },
];

const pricing = [
  {
    title: 'We speak',
    features: [
      'English',
      'German',
      'French',
      'Spanish',
      'Portugese',
      'Bulgarian',
    ],
  },
  {
    title: 'You can choose',
    features: [
      'Product/Service Videos',
      'Corporate Image Movies',
      'Animated Videos',
      'Mock Documentaries',
      'Testimonials',
      'Vox-Pop Videos',
    ],
  },
  {
    title: 'You can also get',
    features: [
      'Marketing Consultation',
      'Marketing Content Planning and Execution',
      'Marketing Analysis',
      'Google Ads and Social Media Ads',
      'Campaigning',
      'Design and Copy',
    ],
  },
];

/* TODO: VIDEOURL */

interface IVideoProductionProps {
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
}

const VideoProduction = ({ clientFeedbacks }: IVideoProductionProps) => {
  return (
    <LayoutModule>
      <StatelessHero
        serviceId={2}
        light
        video={video}
        /* video="/hero_video.mp4" */
        poster="/poster.jpg"
        title={
          <>
            <Title>
              <Title size="xl4">
                <span className="whitespace-pre-wrap font-extrabold leading-none tracking-tight lg:text-[8rem]">
                  <span>VIDEO </span>
                  <span>PRODUCTION</span>
                </span>
              </Title>
            </Title>
            <p className="mt-3 max-w-xs text-left sm:mt-5 lg:max-w-lg  lg:text-xl xl:font-black">
              Bring your stories to life with our seamless, engaging, and
              impactful video production. With storyboarding, cinematography,
              sound design, and high-end equipment, we’ll capture your
              audience’s attention and get your message across for you.
            </p>
          </>
        }
      />
      <SpreadMessage
        title="From telling your story"
        subtitle="You’re just one video away"
      />
      <Facts
        facts={facts}
        title="HOW WE DELIVER IMPACTFUL VIDEOS EVERY SINGLE TIME"
        subtitle="And why our clients keep coming back to us for more"
      />
      <Videocomparetable compareTableRows={compareTableRows} />
      <ClientFeedback people={clientFeedbacks?.data || []} />
      <GoalmapModulev2 goals={goals} />
      <Summary tiers={pricing} />
      <ServicesModule video={false} />
    </LayoutModule>
  );
};
export default VideoProduction;

export const getStaticProps: GetStaticProps = async () => {
  const { data: clientFeedbacksData } = await client.query({
    query: GET_CLIENT_FEEDBACKS,
  });
  return {
    props: {
      clientFeedbacks: clientFeedbacksData.clientFeedbacks,
    },
  };
};
