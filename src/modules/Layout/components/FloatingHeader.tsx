import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import disableScroll from 'disable-scroll';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoDark from 'public/assets/logo_dark.svg';
import logoWhite from 'public/assets/logo_white.svg';
import { useEffect, useState } from 'react';

import OutlineButton from '@/common/components/buttons/outline';
import { useAppContext } from '@/lib/context/state';

import { navigation } from './Header';
import MobileMenu from './MobileMenu';

export default function FloatingHeader({
  mode = 'light',
}: {
  mode?: 'light' | 'dark';
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

  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useViewportScroll();

  scrollY.onChange((y) => {
    if (y > 1200) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  });
  const { actions } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const router = useRouter();

  return (
    <>
      <div className="fixed z-[999]">
        <Transition
          show={menuOpen}
          enter="transition-opacity duration-975"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-950"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed z-[1001] h-screen w-screen bg-black/80"
            onClick={() => setMenuOpen(false)}
          ></div>
        </Transition>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.header
            className={`${color[mode].bg} py-2 fixed w-full shadow-md`}
            style={{ zIndex: 1001 }}
            animate={{ y: 0 }}
            initial={{ y: '-110%' }}
            exit={{ y: '-110%' }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <nav className="mx-auto max-w-7xl px-4" aria-label="Top">
              <div className="border-blg:border-none flex w-full items-stretch justify-between">
                <div className="flex w-full items-center justify-center">
                  <Link href="/" passHref scroll={false}>
                    <motion.a
                      exit={{ opacity: 1, zIndex: 51 }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={color[mode].logo}
                        width={60}
                        height={60}
                        alt="Impact Media Logo"
                        priority
                      />
                    </motion.a>
                  </Link>
                  <ul className="ml-10 hidden h-full grow justify-end space-x-6 md:flex">
                    {navigation.map((link) =>
                      link.button ? (
                        <li
                          className={`flex p-2  h-14 pr-0 ${color[mode].button}`}
                          key={1}
                        >
                          <OutlineButton
                            title="CONTACT US"
                            isMenuLight={mode === 'light'}
                            onClick={() => {
                              setMenuOpen(false);
                              actions.openContact();
                            }}
                          />
                        </li>
                      ) : (
                        <li
                          key={link.name}
                          className={`flex items-center text-base leading-10 ${color[mode].button}`}
                        >
                          <Link href={link.href} key={link.name} passHref>
                            <a key={link.name} className="">
                              <span
                                className={`${
                                  router.asPath.includes(link.href)
                                    ? 'font-bold'
                                    : ''
                                } relative before:absolute px-4 before:bottom-[-4px] before:h-[1px] before:w-[0%] before:left-0 transition-all duration-2000 ${
                                  color[mode].underline
                                } before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:w-[100%]`}
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
                    <div className="hidden p-4 pr-0 sm:flex" key={1}>
                      <OutlineButton
                        title="CONTACT US"
                        isMenuLight={mode === 'light'}
                        onClick={() => {
                          setMenuOpen(false);
                          actions.openContact();
                        }}
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
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}
