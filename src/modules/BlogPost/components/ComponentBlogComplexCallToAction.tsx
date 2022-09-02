import Button from '@/common/components/buttons/button';

interface IComponentBlogComplexCallToAction {
  label: string | undefined | null;
  explainer: string | undefined | null;
  url: string | undefined | null;
  buttonLabel: string | undefined | null;
}
const ComponentBlogComplexCallToAction = ({
  label,
  explainer,
  url,
  buttonLabel,
}: IComponentBlogComplexCallToAction) => {
  if (typeof url !== 'string' || typeof buttonLabel !== 'string') {
    return null;
  }

  return (
    <div className="rounded-xl bg-theme-primary">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          <span className="block ">{label}</span>
          <span className="block text-lg font-bold text-theme-secondary">
            {explainer}
          </span>
        </h2>
        <div className="mt-8 ml-12 flex lg:mt-0 lg:shrink-0">
          <div className="inline-flex ">
            <a href={url} target="_blank" rel="noreferrer">
              <Button color="secondary" title={buttonLabel} size="lg" bold />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComponentBlogComplexCallToAction;
