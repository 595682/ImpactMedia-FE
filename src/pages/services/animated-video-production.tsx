import { goals } from 'contents/index';
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

const facts = [
  {
    id: 0,
    title: 'FACT 1',
    description: 'Where we get to know your and find solutions',
    image: fact_1,
  },
  {
    id: 1,
    title: 'FACT 2',
    description: 'Where we get to know your and find solutions',
    image: fact_2,
  },
  {
    id: 2,
    title: 'FACT 3',
    description: 'Where we get to know your and find solutions',
    image: fact_3,
  },
];

const compareTableRows = [
  {
    id: 0,
    title: 'Story',
    good: {
      title: 'Good Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
      isOk: true,
    },
    bad: {
      title: 'Bad Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
      isOk: false,
    },
  },
  {
    id: 1,
    title: 'Style',
    good: {
      title: 'Good Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
      isOk: true,
    },
    bad: {
      title: 'Bad Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
      isOk: false,
    },
  },
  {
    id: 2,
    title: 'Strategy',
    good: {
      title: 'Good Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
      isOk: true,
    },
    bad: {
      title: 'Bad Example',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veniam.',
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

interface IAnimVideoProductionProps {
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
}

const AnimVideoProduction = ({
  clientFeedbacks,
}: IAnimVideoProductionProps) => {
  return (
    <LayoutModule>
      <StatelessHero
        serviceId={3}
        light
        video="/hero_anim.mp4"
        poster="/poster.jpg"
        title={
          <>
            <Title>
              <Title size="xl4">
                <span className="whitespace-pre-wrap font-extrabold leading-none tracking-tight lg:text-[8rem]">
                  <span>ANIMATED VIDEO </span>
                  <span>PRODUCTION</span>
                </span>
              </Title>
            </Title>
            <p className="mt-3 max-w-xs text-left sm:mt-5 lg:max-w-lg  lg:text-xl xl:font-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              illo blanditiis unde quis beatae maxime architecto dicta veniam
              magni aut!
            </p>
          </>
        }
      />
      <SpreadMessage
        subtitle="Just one video away"
        title="TO SECURE MORE CUSTOMERS"
      />
      <Facts
        facts={facts}
        title="How our animated videos will help you get more clients."
        subtitle="You know why clients ..."
      />
      <Videocomparetable compareTableRows={compareTableRows} />
      <ClientFeedback people={clientFeedbacks?.data || []} />
      <GoalmapModulev2 goals={goals} />
      {/* <ProductionType /> */}
      <Summary tiers={pricing} />
      <ServicesModule animated={false} />
    </LayoutModule>
  );
};
export default AnimVideoProduction;

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
