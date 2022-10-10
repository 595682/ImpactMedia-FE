import { AnimateSharedLayout } from 'framer-motion';
import type { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import client from '@/lib/gql/client';
import { GET_ALL_PORTFOLIO_ELEMENTS } from '@/lib/gql/queries/portfolio';
import LayoutModule from '@/modules/Layout';
import PortfolioModule from '@/modules/Portfolio';
import PortfolioLayout from '@/modules/Portfolio/components/PortfolioLayout';
import type { PortfolioElementEntityResponseCollection } from '@/types';

export type TCategory =
  | 'video'
  | 'animated_video'
  | 'live_stream'
  | 'event'
  | '';

interface IPortfolioPageProps {
  allPortfolioElements: PortfolioElementEntityResponseCollection;
  preview: boolean;
}

const PortfolioPage = ({
  allPortfolioElements,
  preview,
}: IPortfolioPageProps) => {
  const portfolioElements = allPortfolioElements?.data || [];

  const [category, setCategory] = useState<TCategory>('');
  const [display, setDisplay] = useState<any[]>([]);

  const getElements = (newCategory: TCategory) => {
    return portfolioElements.filter(
      (video) => video?.attributes?.elementType === newCategory
    );
  };

  useEffect(() => {
    let filteredVideos = [];
    if (category) {
      filteredVideos = getElements(category);
    } else {
      filteredVideos = portfolioElements;
    }
    setDisplay([...filteredVideos]);
  }, [portfolioElements, category]);

  const handleSetCategory = (newCategory: TCategory) => {
    if (category !== newCategory) {
      setCategory(newCategory);
    } else {
      setCategory('');
    }
  };

  return (
    <AnimateSharedLayout>
      <LayoutModule lightMenu previewMode={preview}>
        <PortfolioLayout>
          <PortfolioModule
            display={display}
            category={category}
            handleSetCategory={handleSetCategory}
          />
        </PortfolioLayout>
      </LayoutModule>
    </AnimateSharedLayout>
  );
};

export default PortfolioPage;

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const previewMode = preview ? 'PREVIEW' : 'LIVE';

  const { data } = await client.query({
    query: GET_ALL_PORTFOLIO_ELEMENTS,
    variables: {
      page: 1,
      state: previewMode,
    },
  });

  return {
    props: {
      allPortfolioElements: data.portfolioElements,
      preview: !!preview,
    },
  };
};
