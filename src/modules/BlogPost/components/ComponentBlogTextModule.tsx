import { Remarkable } from 'remarkable';

import Space from '@/modules/Layout/components/Space';

import ComponentBlogSectionTitle from './ComponentBlogSectionTitle';

interface IComponentBlogTextModule {
  title: string | undefined | null;
  content: string | undefined | null;
}
const ComponentBlogTextModule = ({
  content,
  title,
}: IComponentBlogTextModule) => {
  if (typeof content !== 'string') {
    return null;
  }

  const md = new Remarkable();
  const markdown = md.render(content);

  return (
    <div>
      {title && (
        <>
          <ComponentBlogSectionTitle title={title} />
          <Space custom="h-4" />
        </>
      )}
      <div
        className="whitespace-pre-line list-item: link:font-bold link:text-theme-primary link:underline list:list-disc list:pl-10 list-item:my-0"
        dangerouslySetInnerHTML={{ __html: markdown }}
      ></div>
    </div>
  );
};
export default ComponentBlogTextModule;
