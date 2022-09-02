import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import OutlineButton from '@/common/components/buttons/outline';
import { useAppContext } from '@/lib/context/state';

// eslint-disable-next-line import/no-cycle
import { navigation } from './Header';

interface IMobileMenu {
  menuOpen: boolean;
  mode: 'light' | 'dark';
  closeMenu: () => void;
}
const MobileMenu = ({ menuOpen, mode, closeMenu }: IMobileMenu) => {
  const { actions } = useAppContext();

  const color = {
    light: {
      bg: 'bg-white',
      button: 'text-theme-primary',
      underline: 'before:bg-theme-primary',
    },
    dark: {
      bg: 'bg-theme-primary',
      button: 'text-white',
      underline: 'before:bg-white',
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {menuOpen && (
        <motion.div
          key="menu-open"
          initial={{ height: 0 }}
          animate={{ height: 'max-content' }}
          exit={{
            height: 0,
            transition: {
              delay: 0.4,
            },
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            type: 'tween',
            when: 'beforeChildren',
          }}
          className={`absolute z-[1001] inset-0 top-[70px] h-max w-full  ${color[mode].bg} ${color[mode].button} shadow-lg`}
        >
          <motion.ul
            className="flex flex-col items-end px-8 pb-4 pt-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
            {navigation.map((link) =>
              link.button ? (
                <li
                  className={`flex min-h-[40px] my-2 pr-0 ${color[mode].button} block sm:hidden`}
                  key={1}
                >
                  <OutlineButton
                    title="CONTACT US"
                    isMenuLight={mode === 'light'}
                    onClick={() => {
                      closeMenu();
                      actions.openContact();
                    }}
                  />
                </li>
              ) : (
                <li
                  key={link.name}
                  className={`flex items-center text-base leading-10 ${color[mode].button} `}
                >
                  <Link
                    href={link.href}
                    key={link.name}
                    passHref
                    scroll={false}
                  >
                    <a key={link.name} className="">
                      <span
                        className={`relative before:absolute before:bottom-[-4px] before:h-[1px] before:w-full ${color[mode].underline} before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100`}
                      >
                        {link.name}
                      </span>
                    </a>
                  </Link>
                </li>
              )
            )}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
