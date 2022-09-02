import { MenuIcon, XIcon } from '@heroicons/react/outline';
import disableScroll from 'disable-scroll';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoDark from 'public/assets/logo_dark.svg';
import logoWhite from 'public/assets/logo_white.svg';
import logoMark from 'public/assets/logoMark.svg';
import { useEffect, useState } from 'react';

import OutlineButton from '@/common/components/buttons/outline';
import { useAppContext } from '@/lib/context/state';

// eslint-disable-next-line import/no-cycle
import MobileMenu from './MobileMenu';

export const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'CONTACT US', href: '#', button: true },
];

export default function Header({
  menuMode = 'dark',
}: {
  menuMode?: 'light' | 'dark';
}) {
  const color = {
    light: {
      bg: 'bg-white',
      button: 'text-theme-primary',
      logo: logoDark,
      underline: 'before:bg-theme-primary',
    },
    dark: {
      bg: 'bg-theme-primary',
      button: 'text-white',
      logo: logoWhite,
      underline: 'before:bg-white',
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [minifiedMenu, setMinifiedMenu] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    if (menuMode === 'light') {
      return setMode('light');
    }
    return setMode('dark');
  }, []);

  useEffect(() => {
    disableScroll.off();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [menuOpen]);

  scrollY.onChange((y) => {
    if (y > 1000) {
      setMinifiedMenu(true);
    } else {
      setMinifiedMenu(false);
    }
  });

  useEffect(() => {
    if (minifiedMenu) {
      return setMode('light');
    }
    return setMode('dark');
  }, [minifiedMenu]);

  const router = useRouter();
  const { actions } = useAppContext();
  return (
    <>
      <div className="fixed z-[1001] ">
        <AnimatePresence exitBeforeEnter>
          {menuOpen && (
            <motion.div
              className="h-screen w-screen bg-black/80"
              onClick={() => setMenuOpen(false)}
              key="menu-backdrop-open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', type: 'tween' }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <header
        className={`${
          color[mode].bg
        }  z-[1002] fixed w-full transition-all duration-[1200ms] ${
          minifiedMenu ? 'shadow-xl py-0 ' : 'shadow-none py-2'
        } ${menuOpen && minifiedMenu ? 'bg-white/100' : ''}`}
      >
        <nav className="z-[1010] mx-auto max-w-7xl px-4" aria-label="Top">
          <div className="border-blg:border-none flex w-full items-stretch justify-between">
            <div className="flex w-full items-center justify-center overflow-hidden">
              <AnimatePresence exitBeforeEnter>
                <Link
                  href="/"
                  passHref
                  key={`${minifiedMenu}Item`}
                  scroll={false}
                >
                  <motion.a
                    className="flex flex-col"
                    key={`${minifiedMenu}Item`}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                      type: 'tween',
                    }}
                  >
                    {!minifiedMenu ? (
                      <Image
                        src={color[mode].logo}
                        width={80}
                        height={80}
                        alt="Impact Media Logo"
                        priority
                      />
                    ) : (
                      <Image
                        src={logoMark}
                        width={80}
                        height={80}
                        alt="Impact Media Logo"
                        priority
                      />
                    )}
                  </motion.a>
                </Link>
              </AnimatePresence>
              <ul className="ml-10 hidden h-full grow justify-end md:flex">
                {navigation.map((link) =>
                  link.button ? (
                    <li
                      className={`flex p-5 pr-0 ${color[mode].button} `}
                      key={1}
                    >
                      <OutlineButton
                        title="CONTACT US"
                        isMenuLight={mode === 'light'}
                        onClick={() => actions.openContact()}
                      />
                    </li>
                  ) : (
                    <li
                      key={link.name}
                      className={`flex items-center text-base leading-10 ${color[mode].button} transition-all duration-700`}
                    >
                      <Link
                        href={link.href}
                        key={link.name}
                        passHref
                        scroll={false}
                      >
                        <a key={link.name} className="">
                          <span
                            className={`${
                              router.asPath.includes(link.href)
                                ? 'font-bold'
                                : ''
                            } relative before:absolute px-4 before:bottom-[-4px] before:h-[1px] before:w-[0%] before:left-0  ${
                              color[mode].underline
                            } before:opacity-0 before:transition-all before:duration-500 ${
                              router.asPath.includes(link.href)
                                ? ''
                                : 'hover:before:opacity-100'
                            } hover:before:w-[100%]`}
                          >
                            {link.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div
                className={`ml-10 flex h-full grow justify-end ${
                  mode === 'light' ? 'text-theme-primary' : 'text-white'
                } md:hidden`}
              >
                <div className="hidden p-5 pr-0 sm:flex" key={1}>
                  <OutlineButton
                    title="CONTACT US"
                    isMenuLight={mode === 'light'}
                    onClick={() => actions.openContact()}
                  />
                </div>
                <div className="ml-5 flex items-center justify-center p-5 pr-0">
                  <div onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                      <XIcon className="h-8 w-8" />
                    ) : (
                      <MenuIcon className="h-8 w-8" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MobileMenu
            menuOpen={menuOpen}
            mode={mode}
            closeMenu={() => setMenuOpen(false)}
          />
        </nav>
      </header>
    </>
  );
}
