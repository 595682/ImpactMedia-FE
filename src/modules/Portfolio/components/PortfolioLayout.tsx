import { motion } from 'framer-motion';
import React from 'react';

import Wrapper from '@/Layout/Wrapper';

interface IBlogLayout {
  children: React.ReactNode;
}
const BlogLayout = ({ children }: IBlogLayout) => {
  return (
    <motion.div className="bg-white pt-16">
      <Wrapper>{children}</Wrapper>
    </motion.div>
  );
};
export default BlogLayout;
