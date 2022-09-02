import Button from '@/common/components/buttons/button';
import Parallax from '@/common/components/parallax';
import { useAppContext } from '@/lib/context/state';

import Wrapper from '../Layout/components/Wrapper';

interface IAlternativeCTA {
  variant?: 'dark' | 'light';
  content: any;
  topColor: string;
  bottomColor: string;
}
const AlternativeCTA = ({
  variant = 'light',
  content,
  topColor,
  bottomColor,
}: IAlternativeCTA) => {
  const colors = {
    dark: 'bg-theme-primary text-white',
    light: 'bg-white text-theme-primary',
  };

  // TODO: MERGE WITH REGULAR CTA
  const { actions } = useAppContext();

  return (
    <div className={`relative py-10  mt-[-1px]`}>
      <div
        className={`absolute bottom-0 -z-10 mt-[-1px] h-full w-full ${topColor}`}
      ></div>
      <div
        className={`absolute bottom-0 -z-10 mb-[-1px] h-1/2 w-full ${bottomColor}`}
      ></div>
      <div className="z-10 px-10 lg:px-0">
        <Wrapper width="narrower">
          <Parallax>
            <div className={`${colors[variant]} rounded-lg shadow-2xl`}>
              <div className="mx-auto max-w-7xl py-12 px-4 text-center md:flex md:items-center md:justify-between md:py-10 md:px-12 md:text-left">
                {content}
                <div className="mt-8 flex justify-center md:mt-0 md:shrink-0">
                  <Button
                    bold
                    size="lg"
                    title="GET IN TOUCH"
                    color="secondary"
                    onClick={actions.openContact}
                  />
                </div>
              </div>
            </div>
          </Parallax>
        </Wrapper>
      </div>
    </div>
  );
};
export default AlternativeCTA;
