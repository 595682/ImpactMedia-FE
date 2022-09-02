import Button from '@/common/components/buttons/button';

import Wrapper from '../Layout/components/Wrapper';

interface ICallToActionModule {
  variant: 'dark' | 'light';
  content: any;
}
const CallToActionModule = ({
  variant = 'light',
  content,
}: ICallToActionModule) => {
  const colors = {
    dark: 'bg-theme-primary text-white',
    light: 'bg-white text-theme-primary',
  };

  return (
    <div className="py-10">
      <Wrapper width="narrower">
        <div className={`${colors[variant]} rounded-lg`}>
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-12">
            {content}
            <div className="mt-8 flex lg:mt-0 lg:shrink-0">
              <Button title="GET IN TOUCH" color="secondary">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default CallToActionModule;
