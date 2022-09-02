import { XIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';

import { useAppContext } from '@/lib/context/state';

import ContactForm from '../Layout/components/ContactForm';

const QuotationWindowModule = () => {
  const { state, actions } = useAppContext();

  return (
    <AnimatePresence exitBeforeEnter>
      {state.quotOpen && (
        <div className="fixed z-[9998] flex h-screen w-screen items-center justify-center">
          <motion.div
            className="absolute z-[9998] h-full w-full bg-black/80 "
            onClick={() => actions.closeQuote()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.6 } }}
          ></motion.div>
          <motion.div
            className="relative z-[10000] overflow-hidden rounded-xl bg-white p-12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: [1, 0], y: [0, 100] }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <div
              className="absolute top-0 right-0 flex aspect-1 w-12 cursor-pointer items-center justify-center  rounded-full rounded-tr-xl"
              onClick={actions.closeQuote}
            >
              <XIcon className="h-6 w-6" />
            </div>
            <ContactForm
              replace={{ message: 'Description', dropdown: state.dropdown }}
              title={state.title}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default QuotationWindowModule;
