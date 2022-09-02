import React from 'react';

import Wrapper from '@/modules/Layout/components/Wrapper';
import type { ComponentPortfolioOutcomes, Maybe } from '@/types';

interface IPortfolioFacts {
  outcomes: Maybe<ComponentPortfolioOutcomes>[];
}
const PortfolioFacts = ({ outcomes = [] }: IPortfolioFacts) => {
  return (
    <div className="pt-20">
      <Wrapper width="narrower">
        <div className="grid grid-cols-3 lg:gap-6">
          {outcomes.map((outcome) => (
            <div
              className="mt-10 flex flex-col items-center sm:mt-0"
              key={outcome?.id}
            >
              <dt className="order-1 mt-2 text-lg font-medium leading-6 text-gray-500">
                {outcome?.title}
              </dt>
              <dd className="order-2 text-5xl font-bold tracking-tight text-theme-primary">
                {outcome?.highlight}
              </dd>
              <dt className="order-3 mt-2 text-center text-lg font-medium leading-6 text-gray-500">
                {outcome?.description}
              </dt>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export default PortfolioFacts;
