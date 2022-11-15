import Image from 'next/image';
import err404 from 'public/assets/error/er404.svg';
import React from 'react';

import Button from '@/common/components/buttons/button';
import CustomLink from '@/common/components/CustomLink';
import PageSEO from '@/common/components/PageSEO';
import LayoutModule from '@/modules/Layout';
import Space from '@/modules/Layout/components/Space';
import Wrapper from '@/modules/Layout/components/Wrapper';

const ErrorPage = () => {
  return (
    <LayoutModule noMap lightMenu>
      <PageSEO
        title="404 | Impact Media"
        description="An error occurred and the page could not be found. Looks like it could use a story to bring it to life!"
      />
      <Wrapper>
        <div className="grid pt-12 md:grid-cols-2 md:pt-40">
          <div className="flex flex-col items-center justify-center">
            <span className="text-6xl font-bold">OOPS!</span>
            <span className="text-3xl font-bold">PAGE NOT FOUND</span>

            <span className="max-w-[20ch] text-center text-2xl">
              Looks like it could use a story to bring it to life!
            </span>
            <Space amount="sm" />
            <CustomLink href="/">
              <Button color="secondary" title="GO BACK" />
            </CustomLink>
          </div>
          <div className="flex flex-col aspect-1">
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
