import Image from 'next/image';
import err404 from 'public/assets/error/er404.svg';
import React from 'react';

import Button from '@/common/components/buttons/button';
import CustomLink from '@/common/components/CustomLink';
import LayoutModule from '@/modules/Layout';
import Space from '@/modules/Layout/components/Space';
import Wrapper from '@/modules/Layout/components/Wrapper';

const ErrorPage = () => {
  return (
    <LayoutModule noMap lightMenu>
      <Wrapper>
        <div className="grid pt-12 md:grid-cols-2 md:pt-40">
          <div className="flex flex-col items-center justify-center">
            <span className="text-6xl font-bold">Whoops!</span>

            <span className="max-w-[20ch] text-center text-2xl">
              It looks like the page you are trying to access does not exist!
            </span>
            <Space amount="sm" />
            <CustomLink href="/">
              <Button color="secondary" title="Back to home" />
            </CustomLink>
          </div>
          <div className="flex aspect-1 flex-col">
            <Image
              src={err404}
              alt="Error 404 vector"
              width={500}
              height={500}
            />
            <span className="mt-4 text-center">
              This is a 404 error, which means you clicked a bad link or entered
              an invalid URL.
            </span>
          </div>
        </div>
      </Wrapper>
    </LayoutModule>
  );
};
export default ErrorPage;
