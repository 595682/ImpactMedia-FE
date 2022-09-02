import Button from '../buttons/button';
import CustomLink from '../CustomLink';

const PreviewMode = () => {
  return (
    <div className="fixed bottom-0 z-[99999] flex w-full items-center justify-between space-x-3 bg-red-500 p-4 pr-6 font-bold">
      <p>You are in preview mode currently! </p>
      <CustomLink href="/api/exitPreview">
        <Button color="primary" title="EXIT PREVIEW"></Button>
      </CustomLink>
    </div>
  );
};
export default PreviewMode;
