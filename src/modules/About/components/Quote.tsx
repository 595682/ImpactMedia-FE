import { motion } from 'framer-motion';

import {
  quoteIconAnimation,
  quoteRootAnimation,
} from '@/common/animations/quoteAnimation';
import { SlideUpAnimation } from '@/common/animations/sharedAnimations';

interface IQuote {
  content: string;
  author: string;
}
const Quote = ({ content, author }: IQuote) => {
  return (
    <motion.div
      variants={quoteRootAnimation}
      className="mt-10  text-2xl text-theme-secondary lg:mt-0"
    >
      <motion.svg
        className="h-12 w-12 text-theme-secondary"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
        variants={quoteIconAnimation}
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </motion.svg>
      <motion.div
        variants={SlideUpAnimation()}
        className="mt-2 max-w-[30ch] font-bold"
      >
        {content}
      </motion.div>
      <motion.p
        variants={SlideUpAnimation(2.2)}
        className="mt-2 w-full max-w-[50ch] text-right text-base"
      >
        -{author}
      </motion.p>
    </motion.div>
  );
};
export default Quote;
