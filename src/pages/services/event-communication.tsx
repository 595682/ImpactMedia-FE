import { eventServiceDetails } from 'contents/servicesDetails';
import { event } from 'contents/videoUrls';
import type { GetStaticProps } from 'next';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import PageSEO from '@/common/components/PageSEO';
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
  CompanyEntityResponseCollection,
  PortfolioElementEntityResponseCollection,
} from '@/types';

interface IEventCommunicationPage {
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
  portfolioElements: PortfolioElementEntityResponseCollection;
  companies: CompanyEntityResponseCollection;
}

interface IText {
  value: string | ReactNode;
  decorator?: any;
}

export interface IInnerContent {
  title: string | ReactNode;
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

  /* TODO: VIDEOURL */

  return (
    <>
      <PageSEO
        title="Marketing & Public Relations | Impact Media"
        description="Impact Media's events and public relations elevate the communication that bridges audiences across the world. We create an effective communications strategy across newsletters, press releases, journalistic articles, and more, then execute, manage and evaluate it."
      />
      <ServicePopup
        closePopup={closePopup}
        content={popupContent}
        isOpen={popupOpen}
      />

      <LayoutModule>
        <StatelessHero
          serviceId={11}
          light
          video={event}
          /* video="/hero_event.mp4" */
          poster="/poster.jpg"
          title={
            <>
              <Title>
                <Title size="xl4">
                  <span className="whitespace-pre-wrap uppercase leading-none tracking-tight lg:text-[8rem]">
                    <span className="block">{eventServiceDetails.title1} </span>
                    <span className="block font-bold">
                      {eventServiceDetails.title2}
                    </span>
                  </span>
                </Title>
              </Title>
              <p className="mt-3 max-w-xs text-left sm:mt-5 lg:max-w-lg lg:text-xl xl:font-black">
                {eventServiceDetails.description}
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
              <span className="block">Have an upcoming event?</span>
              <span className="block">
                We’ll make it a{' '}
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
        <ClientFeedback
          people={clientFeedbacks.data || []}
          style="dark"
          companies={[]}
        />

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
