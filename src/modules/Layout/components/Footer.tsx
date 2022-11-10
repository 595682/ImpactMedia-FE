import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="absolute bottom-0 w-full -z-10 h-1/2 bg-theme-primary "></div>
          <Wrapper>
            <Parallax offset={90}>
              <div className="sm:px-6 lg:px-6">
                <div className="grid min-h-[500px] w-full grid-cols-2 overflow-hidden rounded-lg bg-[#E8E8EB] shadow-lg">
                  <div className="col-span-2 p-10 sm:p-8 sm:py-16 lg:col-span-1 lg:p-10 lg:py-10">
                    <ContactForm
                      title={
                        <>
                          GET IN<span className="font-bold"> TOUCH</span>
                        </>
                      }
                    />
                  </div>
                  <div className="col-span-2  hidden min-h-[300px] lg:col-span-1 lg:block">
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
      <footer className="pb-6 mt-10 text-white bg-theme-primary ">
        <Wrapper>
          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <div className="min-w-[100px] ">
                <Image
                  src={logo_white}
                  alt="Impact media logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="hidden ml-6 text-sm grow lg:block">
                <span className="block">Impact Media Europe SRL</span>
                <span className="block">Rue du Monastère 10-12</span>
                <span className="block">1000 Brussels, Belgium</span>
                {/*  <span className="block">VAT: BE0737.709.843.</span> */}
              </p>
            </div>
            <div className="items-center justify-center hidden sm:flex">
              <div className="flex flex-col items-start justify-start w-max">
                <div className="inline-flex items-center justify-start">
                  <PhoneIcon className="w-8 h-8 mr-2 text-theme-secondary" />
                  <p className="text-sm text-white">(+32) 492 40 86 71</p>
                </div>
                <div className="inline-flex items-center justify-start">
                  <AtSymbolIcon className="w-8 h-8 mr-2 text-theme-secondary" />
                  <p className="text-sm text-white">office@impact-media.be</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-2 sm:col-span-1">
              <div className="inline-flex items-center justify-end w-full space-x-3">
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
                  <a
                    href="https://be.linkedin.com/company/impact-media-europe"
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
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
        <div className="w-full mt-8 text-sm text-center">
          Designed by Impact Media | Developed by{' '}
          <a
            href="http://www.boostern.com"
            className="text-theme-secondary hover:underline"
          >
            Boostern
          </a>
        </div>
        <div className="w-full mt-2 text-sm text-center">
          © 2022 - Impact Media Europe. All Rights Reserved. | {` `}
          <Link href="/privacy-policy" passHref scroll={false}>
            <a className="text-theme-secondary hover:underline">
              Privacy Policy
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
