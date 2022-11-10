import { approach, ctaContent, goals } from 'contents/index';
import type { GetStaticProps } from 'next';

import client from '@/lib/gql/client';
import { GET_CLIENT_FEEDBACKS } from '@/lib/gql/queries/clientFeedback';
import { GET_TRUESTED_COMPANIES } from '@/lib/gql/queries/companies';
import { GET_FEATURED_PORTFOLIO_ELEMENTS } from '@/lib/gql/queries/portfolio';
import ApproachModule from '@/modules/Approach';
import AlternativeCTA from '@/modules/CallToAction/alternativeCTA';
import GoalmapModulev2 from '@/modules/Goalmap';
import LayoutModule from '@/modules/Layout';
import MainHero from '@/modules/MainHero';
import ClientFeedback from '@/modules/MainServices/components/ClientFeedback';
import InlinePortfolioComponent from '@/modules/Portfolio/InlinePortfolioComponent';
import type {
  ClientFeedbackEntityResponseCollection,
  CompanyEntityResponseCollection,
  PortfolioElementEntityResponseCollection,
} from '@/types';

interface IIndexPageProps {
  companies: CompanyEntityResponseCollection;
  clientFeedbacks: ClientFeedbackEntityResponseCollection;
  portfolioElements: PortfolioElementEntityResponseCollection;
  videoShowcaseElements: PortfolioElementEntityResponseCollection;
}

const IndexPage = ({
  companies,
  clientFeedbacks,
  portfolioElements,
}: IIndexPageProps) => {
  console.log(clientFeedbacks?.data);

  return (
    <LayoutModule>
      <MainHero />
      <InlinePortfolioComponent
        videos={portfolioElements?.data || []}
        variant="dark"
      />
      {/* <TrustedclientsModule
        feedbacks={clientFeedbacks?.data || []}
        companies={companies?.data || []}
      /> */}
      <ClientFeedback
        people={clientFeedbacks.data || []}
        companies={companies?.data || []}
        style="light"
      />
      <AlternativeCTA
        topColor="bg-white"
        bottomColor="bg-theme-primary"
        variant="light"
        content={
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {ctaContent}
          </h2>
        }
      />
      <GoalmapModulev2 goals={goals} />

      <ApproachModule approach={approach} />
    </LayoutModule>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TRUESTED_COMPANIES,
  });
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
      companies: data.companies,
      clientFeedbacks: clientFeedbacksData.clientFeedbacks,
      portfolioElements: porfolioELementsData.portfolioElements,
    },
  };
};
