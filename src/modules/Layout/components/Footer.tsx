import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import logo_white from 'public/assets/logo_white.svg';

import Parallax from '@/common/components/parallax';

import ContactForm from './ContactForm';
import Wrapper from './Wrapper';

const Footer = ({
  fullFooter,
  noMap,
}: {
  fullFooter: boolean;
  noMap: boolean;
}) => {
  return (
    <div className={`relative ${fullFooter ? 'bg-theme-primary' : ''} pt-20`}>
      {!noMap && (
        <>
          <div className="absolute bottom-0 -z-10 h-1/2 w-full bg-theme-primary "></div>
          <Wrapper>
            <Parallax offset={90}>
              <div className="sm:px-16 lg:px-6">
                <div className="grid min-h-[500px] w-full grid-cols-2 overflow-hidden rounded-lg bg-[#E8E8EB] shadow-lg">
                  <div className="col-span-2 p-10 sm:p-8 sm:py-16 lg:col-span-1 lg:p-10 lg:py-10">
                    <ContactForm
                      title={
                        <>
                          <span className="font-bold">Contact</span> us!
                        </>
                      }
                    />
                  </div>
                  <div className="col-span-2 hidden min-h-[300px] lg:col-span-1 lg:block">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641997.2746628037!2d4.069472957196646!3d51.05674639968752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c461e2ed6b85%3A0x321cc0dc126af91c!2sImpact%20Media!5e0!3m2!1sen!2sbe!4v1658474471499!5m2!1sen!2sbe"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Parallax>
          </Wrapper>
        </>
      )}
      <footer className="mt-10 bg-theme-primary pb-6 text-white lg:mt-6">
        <Wrapper>
          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <div className="min-w-[100px] grow">
                <Image
                  src={logo_white}
                  alt="Impact media logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="ml-6 hidden shrink text-sm lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit necessitatibus nostrum.
              </p>
            </div>
            <div className="hidden items-center  justify-center sm:flex">
              <div className="flex w-max flex-col items-start justify-start">
                <div className="inline-flex  items-center justify-start">
                  <PhoneIcon className="mr-2 h-8 w-8 text-theme-secondary" />
                  <p className="text-sm text-white">+12 34 5678</p>
                </div>
                <div className="inline-flex  items-center justify-start">
                  <AtSymbolIcon className="mr-2 h-8 w-8 text-theme-secondary" />
                  <p className="text-sm text-white">contact@impactmedia.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center sm:col-span-1">
              <div className="inline-flex w-full items-center justify-end space-x-3">
                <div>
                  <a
                    href="https://www.facebook.com/ImpactMediaEU/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="fill-theme-secondary"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="fill-theme-secondary"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="fill-theme-secondary"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://twitter.com/ImpactMediaEU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="fill-theme-secondary"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </footer>
    </div>
  );
};
export default Footer;
