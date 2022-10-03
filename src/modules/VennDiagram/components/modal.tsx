import { XIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

import Button from '@/common/components/buttons/button';
import { useAppContext } from '@/lib/context/state';
import Title from '@/modules/Layout/components/Title';
import Wrapper from '@/modules/Layout/components/Wrapper';
import type {
  IContent,
  IInnerContent,
} from '@/pages/services/event-communication';

interface IServicePopup {
  isOpen: boolean;
  closePopup: () => void;
  content: IContent;
}
const ServicePopup = ({ isOpen, closePopup, content }: IServicePopup) => {
  const { actions } = useAppContext();

  const handleClosePopup = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClosePopup, false);

    return () => {
      document.removeEventListener('keydown', handleClosePopup, false);
    };
  }, []);

  if (!content?.contents) {
    return null;
  }

  const handleRequestQuotation = () => {
    closePopup();
    actions.openQuote(content.serviceId);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div
          className="fixed z-[9998] flex h-screen w-screen items-center justify-center shadow-2xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            duration: 1.2,
            ease: [0.8, 0.77, 0, 1],
            type: 'tween',
          }}
        >
          <div className="flex h-full w-full flex-col bg-white">
            <div className="shrink-0">
              <Wrapper>
                <div className="flex w-full py-8">
                  <div className="flex-1">
                    <Title size="lg">{content.subtitle}</Title>
                    <Title size="xl2">
                      <span className="font-bold">{content.title}</span>
                    </Title>
                  </div>
                  <div>
                    <div
                      className="flex aspect-1 w-12 cursor-pointer items-center justify-center rounded-full bg-theme-secondary transition-all duration-700 hover:bg-theme-secondary-dark"
                      onClick={closePopup}
                    >
                      <XIcon className="h-6 w-6 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>
            <div
              className="flex h-full flex-1 items-center justify-center overflow-auto "
              id="ENABLESCROLL_1"
            >
              <div className="mx-auto h-full max-w-7xl px-4 lg:h-auto">
                <div className=" flex h-auto flex-1 items-center justify-center">
                  <div
                    className={`grid h-max gap-8 sm:grid-cols-2 md:grid-cols-3 ${
                      content.contents.length > 3
                        ? 'lg:grid-cols-4'
                        : 'lg:grid-cols-3'
                    }`}
                  >
                    {content.contents.map(
                      (cnt: IInnerContent, index: number) => (
                        <div
                          key={index}
                          className="flex h-full flex-col justify-center"
                        >
                          {cnt.icon && (
                            <div className="flex w-max items-center justify-center rounded-lg bg-theme-secondary p-3">
                              <Image
                                src={cnt.icon}
                                width={28}
                                height={28}
                                alt={`${content.title}. ${cnt.title}`}
                              />
                            </div>
                          )}
                          <div className="mt-6">
                            <h3 className="text-base font-bold text-gray-800">
                              {cnt.title}
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                              {cnt.text.map((text, idx: number) => (
                                <p key={idx} className="flex items-center">
                                  {text.decorator && (
                                    <span className="mr-2">
                                      {text.decorator}
                                    </span>
                                  )}
                                  {text.value}
                                </p>
                              ))}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <Wrapper>
                <div className="flex w-full py-8">
                  <div className="flex-1"></div>
                  <div>
                    <Button
                      color="secondary"
                      title="GET A QUOTATION"
                      onClick={handleRequestQuotation}
                    />
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ServicePopup;
