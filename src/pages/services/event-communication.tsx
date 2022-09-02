import type { GetStaticProps } from 'next';
import React, { useState } from 'react';

import client from '@/lib/gql/client';
import { GET_CLIENT_FEEDBACKS } from '@/lib/gql/queries/clientFeedback';
import { GET_FEATURED_PORTFOLIO_ELEMENTS } from '@/lib/gql/queries/portfolio';
import UnwrappedCallToActionModule from '@/modules/CallToAction/alternativeCTA';
import EventHighlightModule from '@/modules/EventHighlightComponent';
import LayoutModule from '@/modules/Layout';
import Title from '@/modules/Layout/components/Title';
import StatelessHero from '@/modules/MainHero/statelessHero';
import ClientFeedback from '@/modules/MainServices/components/ClientFeedback';
import InlinePortfolioComponent from '@/modules/Portfolio/InlinePortfolioComponent';
import ServicesModule from '@/modules/Services';
import ServicePopup from '@/modules/VennDiagram/components/modal';
import VennV2 from '@/modules/VennDiagram/v2';
import type {
  ClientFeedbackEntityResponseCollection,
  PortfolioElementEntityResponseCollection,
} from '@/types';

interface IEventCommunicationPage {
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
  portfolioElements: PortfolioElementEntityResponseCollection;
}

interface IText {
  value: string;
  decorator?: any;
}

export interface IInnerContent {
  title: string;
  text: IText[];
  icon: any;
}

export interface IContent {
  title: string;
  subtitle: string;
  contents: IInnerContent[];
  serviceId: number;
}

const EventCommunicationPage = ({
  clientFeedbacks,
  portfolioElements,
}: IEventCommunicationPage) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({} as IContent);

  const makeItPop = async (content: IContent) => {
    setPopupOpen(true);
    const { PreventScrolling } = await import('prevent-scrolling');
    const scrollable: HTMLElement | null =
      document.querySelector('#ENABLESCROLL_1');
    PreventScrolling(scrollable!);
    setPopupContent(content);
  };

  const closePopup = async () => {
    const { ReEnableScrolling } = await import('prevent-scrolling');
    ReEnableScrolling();
    setPopupOpen(false);
  };

  return (
    <>
      <ServicePopup
        closePopup={closePopup}
        content={popupContent}
        isOpen={popupOpen}
      />

      <LayoutModule>
        <StatelessHero
          serviceId={11}
          light
          video="/hero_event.mp4"
          poster="/poster.jpg"
          title={
            <>
              <Title>
                <Title size="xl4">
                  <span className="whitespace-pre-wrap font-extrabold leading-none tracking-tight lg:text-[8rem]">
                    <span className="block">PUBLIC RELATION 2.0</span>
                    <span className="block font-bold">EVENTS & MORE</span>
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

        <VennV2 makeItPop={makeItPop} />

        <UnwrappedCallToActionModule
          topColor="bg-white"
          bottomColor="bg-theme-primary"
          variant="light"
          content={
            <h2 className="text-4xl leading-tight">
              <span className="block">We are here to make</span>
              <span className="block">
                your event a{' '}
                <span className="font-bold text-theme-secondary">SUCCESS!</span>
              </span>
            </h2>
          }
        />
        <EventHighlightModule />
        <InlinePortfolioComponent
          videos={portfolioElements?.data || []}
          variant="light"
        />
        <ClientFeedback people={clientFeedbacks.data || []} style="dark" />

        <ServicesModule event={false} />
      </LayoutModule>
    </>
  );
};
export default EventCommunicationPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: clientFeedbacksData } = await client.query({
    query: GET_CLIENT_FEEDBACKS,
  });
  const { data: porfolioELementsData } = await client.query({
    query: GET_FEATURED_PORTFOLIO_ELEMENTS,
    variables: {
      page: 1,
    },
  });

  return {
    props: {
      clientFeedbacks: clientFeedbacksData.clientFeedbacks,
      portfolioElements: porfolioELementsData.portfolioElements,
    },
  };
};
