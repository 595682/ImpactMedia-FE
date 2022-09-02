import React from 'react';

import Button from '@/common/components/buttons/button';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';

interface IServiceHero {
  title: any;
  description: string;
}
const ServiceHero = ({ title, description }: IServiceHero) => {
  return (
    <div className=" bg-theme-primary py-40 text-white">
      <Wrapper>
        <div className="flex h-full items-stretch justify-between space-x-10">
          <div>
            <Title>{title}</Title>
            <p className="my-6 max-w-[50ch]">{description}</p>
            <Button color="secondary" title="GET A QUOTE"></Button>
          </div>
          <div className="flex w-full max-w-xl items-stretch rounded-xl bg-gray-300"></div>
        </div>
      </Wrapper>
    </div>
  );
};
export default ServiceHero;
