interface IComponentBlogSimpleCallToAction {
  text: string | undefined | null;
  url: string | undefined | null;
}
const ComponentBlogSimpleCallToAction = ({
  text,
  url,
}: IComponentBlogSimpleCallToAction) => {
  if (typeof text !== 'string' || typeof url !== 'string') {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mx-auto w-max cursor-pointer flex-wrap items-center border-b-2 underline-offset-2 hover:underline"
    >
      <p className="mr-2 text-lg">{text} &#8594;</p>
      {/* <ArrowRightIcon className="h-6 w-6" /> */}
    </a>
  );
};
export default ComponentBlogSimpleCallToAction;
