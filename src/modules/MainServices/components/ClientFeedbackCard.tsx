import Image from 'next/image';

import StrapiImage from '@/common/components/StrapiImage';
import type { ClientFeedbackEntity } from '@/types';

interface IClientFeedbackCard {
  person: ClientFeedbackEntity;
  color: 'light' | 'dark';
}
const ClientFeedbackCard = ({
  person,
  color = 'light',
}: IClientFeedbackCard) => {
  const colors = {
    light: {
      bg: 'bg-white',
      text: 'text-theme-primary',
      hl: 'text-theme-primary',
    },
    dark: {
      bg: 'bg-theme-primary',
      text: 'text-white',
      hl: 'text-theme-secondary',
    },
  };

  return (
    <li className="relative h-full px-6 py-10 text-center rounded-lg xl:px-10 xl:text-left">
      <div
        className={`absolute left-0 bottom-0 -z-10 h-[76%] w-full rounded-xl ${colors[color].bg}`}
      ></div>
      <div className="z-20 flex flex-col h-full space-y-6 xl:space-y-10">
        {person.attributes?.feedbackFrom?.avatar?.data?.attributes?.formats
          ?.small?.url ||
        person.attributes?.feedbackFrom?.avatar?.data?.attributes?.url ? (
          <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full xl:h-40 xl:w-40 ">
            <StrapiImage
              src={
                person.attributes?.feedbackFrom?.avatar?.data?.attributes
                  ?.formats?.small?.url ||
                person.attributes?.feedbackFrom?.avatar?.data?.attributes?.url
              }
              height={
                person.attributes?.feedbackFrom?.avatar?.data?.attributes
                  ?.height
              }
              width={
                person.attributes?.feedbackFrom?.avatar?.data?.attributes?.width
              }
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
        ) : (
          <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full xl:h-40 xl:w-40 ">
            <Image
              src={'/assets/defaultAvatar.png'}
              height={160}
              width={160}
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
        )}
        <div className="w-full grow xl:justify-between">
          <div
            className={`font-medium h-full flex flex-col leading-6 ${colors[color].text}`}
          >
            <h3 className="text-2xl text-center ">
              {person.attributes?.feedbackFrom?.name}
            </h3>
            <div
              className={`mx-auto mb-8 text-center font-semibold ${colors[color].hl}`}
            >
              {person.attributes?.feedbackFrom?.position}{' '}
              {person.attributes?.company?.data?.attributes?.name &&
                `at 
              ${person.attributes?.company?.data?.attributes?.name}`}
            </div>
            <p className="flex items-center justify-center w-full text-center grow">
              {person.attributes?.feedback}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ClientFeedbackCard;
