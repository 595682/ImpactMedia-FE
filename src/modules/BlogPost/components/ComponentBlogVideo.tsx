import Responsiveplayer from '@/common/components/Responsiveplayer/controllableResponsivePlayer';
import Space from '@/modules/Layout/components/Space';

import ComponentBlogSectionTitle from './ComponentBlogSectionTitle';

interface IComponentBlogVideo {
  videoUrl: string | undefined | null;
  title: string | undefined | null;
}
const ComponentBlogVideo = ({ videoUrl, title }: IComponentBlogVideo) => {
  if (typeof videoUrl !== 'string') {
    return null;
  }

  return (
    <div>
      {title && (
        <>
          <ComponentBlogSectionTitle title={title} />
          <Space custom="h-6" />
          <Responsiveplayer url={videoUrl} />
        </>
      )}
    </div>
  );
};
export default ComponentBlogVideo;
