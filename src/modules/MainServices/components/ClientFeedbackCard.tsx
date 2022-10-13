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
    <li className="relative h-full rounded-lg py-10 px-6 text-center xl:px-10 xl:text-left">
      <div
        className={`absolute left-0 bottom-0 -z-10 h-[76%] w-full rounded-xl ${colors[color].bg}`}
      ></div>
      <div className="z-20 flex h-full flex-col space-y-6 xl:space-y-10">
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full xl:h-40 xl:w-40 ">
          <StrapiImage
            src={
              person.attributes?.feedbackFrom?.avatar?.data?.attributes?.formats
                .small.url ||
              person.attributes?.feedbackFrom?.avatar?.data?.attributes?.url
            }
            height={
              person.attributes?.feedbackFrom?.avatar?.data?.attributes?.height
            }
            width={
              person.attributes?.feedbackFrom?.avatar?.data?.attributes?.width
            }
            objectFit="cover"
            layout="fill"
            alt=""
          />
        </div>
        <div className=" w-full grow xl:justify-between">
          <div
            className={`font-medium h-full flex flex-col leading-6 ${colors[color].text}`}
          >
            <h3 className=" text-center text-2xl ">
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
            <p className="flex w-full grow items-center justify-center  text-center">
              {person.attributes?.feedback}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ClientFeedbackCard;
