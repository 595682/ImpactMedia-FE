import React from 'react';

import Wrapper from '@/modules/Layout/components/Wrapper';

interface IBlogLayout {
  children: React.ReactNode;
}
const BlogLayout = ({ children }: IBlogLayout) => {
  return (
    <div className="border-t-[1px] border-theme-primary-light bg-theme-primary pt-16">
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
export default BlogLayout;
